import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button'

function ModalAction(props) {
    const [movieId, setMovieId] = useState(null)

    useEffect(() => {
        if (props.movie != null) {
            console.log(props.movie.movieItem.id)
            setMovieId(props.movie.movieItem.id)
        } else {
            console.log("movie object is null")
        }
    }, [])

    const deleteMovie = () => {
        props.movies.some(movie => {
            if (movieId == movie.movie.movieItem.id) {
                localStorage.removeItem(movieId.toString())
                console.log("deleted movie")
                props.onHide()
                return true
            }
        })

        props.setDisplayMessage({
            display: true,
            type: 'success',
            content: 'Movie successfully deleted from your list.'
        })
    }

    return (
        <Modal variant="danger"
               {...props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header closeButton style={{backgroundColor: '#dc354566'}}>
                <Modal.Title style={{color: '#dc3545'}} id="contained-modal-title-vcenter">
                    {props.content.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.content.description}</p>
            </Modal.Body>
            <Modal.Footer>
                {movieId ?
                    <Button variant="danger" onClick={deleteMovie}>{props.content.btnTxt}</Button>
                    : null}
                <Button variant="light" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAction