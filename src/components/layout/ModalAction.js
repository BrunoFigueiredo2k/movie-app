import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button'

function ModalAction(props) {
    const [movieId, setMovieId] = useState(null)

    console.log(props)

    useEffect(() => {
        if (props.movie != null){
            setMovieId(props.movie.id)
        } else {
            console.log("movie object is null")
        }
    }, [])

    console.log(movieId)

    return (
        <Modal variant="danger"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title style={{color: '#dc3545'}} id="contained-modal-title-vcenter">
                {props.content.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            {props.content.description}
            </p>
        </Modal.Body>
        <Modal.Footer>
            {movieId ? 
                <Button variant="danger" onClick={props.function(movieId, props.movies)}>{props.content.btnTxt}</Button>
            : null }
            <Button variant="light" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default ModalAction