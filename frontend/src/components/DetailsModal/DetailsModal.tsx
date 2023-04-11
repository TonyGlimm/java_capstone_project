import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import "./DetailsModal.css";

import Box from '@mui/material/Box';
import {Movie} from "../../models/Movie";
import {PropsWithChildren} from "react";


const style = {

    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#4B0082",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:"80%",
    width:"80%",
    color:"white",
    padding:(1)


};


type DetailsModalProps = {
    movie: Movie;
    children?: React.ReactNode;
} & PropsWithChildren<{}>;


export default function DetailsModal({children, ...props}: DetailsModalProps & { children?: React.ReactNode}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.posterPath}`;

    return (
        <>
            <div
                className="media"
                style={{ cursor: "pointer" }}
                color="inherit"
                onClick={handleOpen}
            >
                {children}
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                className="Mainbox_modal"
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >

                <Fade in={open}>
                    <Box sx={style}>
                        <div className="DetailsModal">

                            <img className="DetailsModal__portrait" title={props.movie.originalTitle} src={poster_path}
                                alt={props.movie.originalTitle}   />
                            <img src={poster_path} alt={props.movie.originalTitle} className="DetailsModal__landscape"/>

                    <div className="DetailsModal__about">
                           <span className="DetailsModal__title">
                                {props.movie.originalTitle} (
                                   {(
                                       props.movie.releaseDate
                                   ).substring(0, 4)}
                                   )
                            </span>
                              <span className="DetailsModal__description">
                                {props.movie.overview}
                              </span>
                  </div>
                    </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

