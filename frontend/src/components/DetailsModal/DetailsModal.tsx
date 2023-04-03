import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./DetailsModal.css";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Movie} from "../../models/Movie";
import {PropsWithChildren} from "react";

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",

};

type DetailsModalProps = {
    movie: Movie;
    children?: React.ReactNode;
} & PropsWithChildren<{}>;
;

export default function DetailsModal({children, ...props}: DetailsModalProps & { children?: React.ReactNode}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
/*    let poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.posterPath}`;*/

    return (
        <div>
            <Button className="media" onClick={handleOpen}> {children} </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}