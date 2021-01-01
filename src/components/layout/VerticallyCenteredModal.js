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
import AlertPositive from './AlertPositive'
import {ALERT_POSITIVE_ADDED_CONTENT, watchStatus, ratings} from '../strings'
import {getCurrentDate} from '../utils'

export default function VerticallyCenteredModal(props) {
  const [myMovies, setMyMovies] = useState([])
  const [rating, setRating] = useState(null)
  const [status, setStatus] = useState('Watching')
  const [addedToList, setAddedToList] = useState(false)

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myMovies))
  }, [myMovies])

  const addMovieToList = (e) =>{
    const movieItem = props.movie;

    setMyMovies(prevMovies =>{
        return [...prevMovies, {id: uuidv4(), movie: {movieItem}, userStats: {rating, status}, date: getCurrentDate()}]
    })

    setAddedToList(true)
  }
  
  const handleChangeDropdown = (type, value) => {
    switch (type){
      case "rating":
        setRating(value)
        break;
      case "status":
        setStatus(value)
        console.log("status")
        break;
    }
  }

  console.log(rating)

  return (
    <>
    {!addedToList ? 
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
              return <option value={rating} key={rating} onClick={() => handleChangeDropdown('rating', rating)}>{rating}</option>
            })}
          </Form.Control><br/>

          <Form.Label>Watch status</Form.Label>
          <Form.Control as="select">
            <option disabled selected>Select status</option>
            {watchStatus.map(status => {
              return <option value={status} key={status} onClick={() => handleChangeDropdown('status', status)}>{status}</option>
            })}
          </Form.Control>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={addMovieToList} variant="success">Add to list</Button>
      </ModalFooter>
    </Modal>
     : 
     <Modal
     {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     >
     <AlertPositive details={{hideBtn: {display: true, route: '/'}, content: ALERT_POSITIVE_ADDED_CONTENT}}/>
     </Modal>
     }
    </>
  );
} 
