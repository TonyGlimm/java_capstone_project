import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./DetailsModal.css";

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

export default function DetailsModal(props: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.posterPath}`
    return (
        <>
            <div
                className="media"
                style={{ cursor: "pointer" }}
                color="inherit"
                onClick={handleOpen}
            >
                {props}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="Modal"
                style={style}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {props && (
                        <div className="Paper" style={style}>
                            <div className="ContentModal">
                                <img
                                    src={
                                    props.poster_path}
                                    alt={props.title}
                                    className="ContentModal__portrait"
                                />
                                <img
                                    src={
                                        props.backdrop_path}
                                    alt={props.title}
                                    className="ContentModal__landscape"
                                />
                                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {props.originalTitle} (
                      {(
                          props.releaseDate
                      ).substring(0, 4)}
                      )
                  </span>
                                    {props.tagline && (
                                        <i className="tagline">{props.tagline}</i>
                                    )}

                                    <span className="ContentModal__description">
                    {props.overview}
                  </span>
                                </div>
                            </div>
                        </div>
                    )}
                </Fade>
            </Modal>
        </>
    );
}