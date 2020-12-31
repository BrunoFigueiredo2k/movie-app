import React, {useEffect, useState} from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button'
import uuidv4 from 'uuid/v4';
import Form from 'react-bootstrap/Form'
import LOCAL_STORAGE_KEY from '../MovieDetails'

export default function VerticallyCenteredModal(props) {
  const [myMovies, setMyMovies] = useState([])
  const [rating, setRating] = useState(null)
  const [status, setStatus] = useState('Watching')

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myMovies))
  }, [myMovies])

  const getCurrentDate = () => {
    var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0
    var yyyy = currentDate.getFullYear();

    currentDate = mm + '/' + dd + '/' + yyyy;

    return currentDate
  }

  const addMovieToList = (e) =>{
    const movieItem = props.movie;

    setMyMovies(prevMovies =>{
        return [...prevMovies, {id: uuidv4(), movie: {movieItem}, userStats: {rating, status}, date: getCurrentDate()}]
    })
  }

  const ratings = ['(10) Masterpiece', '(9) Great', '(8) Very good', '(7) Good', '(6) Fine', '(5) Average', '(4) Bad', 
  '(3) Very bad', '(2) Horrible', '(1) Appalling'];

  const watchStatus = ['Watching', 'Completed', 'On-Hold', 'Dropped', 'Plan to Watch']

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          Add {props.movie.original_title} to your list?
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Label>Give your rating</Form.Label>
          <Form.Control as="select">
          <option disabled selected>Select rating</option>
            {ratings.map(rating => {
              return <option>{rating}</option>
            })}
          </Form.Control><br/>

          <Form.Label>Watch status</Form.Label>
          <Form.Control as="select">
            <option disabled selected>Select status</option>
            {watchStatus.map(status => {
              return <option>{status}</option>
            })}
          </Form.Control>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={addMovieToList} variant="success">Add to list</Button>
      </ModalFooter>
    </Modal>
  );
} 
