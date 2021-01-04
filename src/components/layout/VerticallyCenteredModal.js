import React, { useState} from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button'
import uuidv4 from 'uuid/v4';
import Form from 'react-bootstrap/Form'
import AlertMessage from './AlertMessage'
import {LOCAL_STORAGE_KEY, ALERT_POSITIVE_ADDED_CONTENT, watchStatus, ratings, COLORS_BORDER_LEFT_RATINGS, COLORS_BORDER_LEFT_STATUS, ALERT_WARNING_ADDED_CONTENT} from '../strings'
import {getCurrentDate} from '../utils'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function VerticallyCenteredModal(props) {
  const [rating, setRating] = useState('Select your rating')
  const [status, setStatus] = useState('Watching')
  const [addedToList, setAddedToList] = useState(false)
  const [detailsAlertMessage, setDetailsAlertMessage] = useState()

  const addMovieToList = (e) =>{
    const movieItem = props.movie;
    const movieObject = {id: uuidv4(), movie: {movieItem}, userStats: {rating, status}, date: getCurrentDate()}
    let prevMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    // If check on whether movie is in list returns false then display warning Alert and false else push to localstorage
    if (!isMovieInList(prevMovies, movieItem)) {
      setDetailsAlertMessage({hideBtn: {display: true, route: '/movies'}, content: ALERT_WARNING_ADDED_CONTENT, variant: 'danger'})
    } else {
      setDetailsAlertMessage({hideBtn: {display: true, route: '/movies'}, content: ALERT_POSITIVE_ADDED_CONTENT, variant: 'success'})
      // Push movie to localstorage
      prevMovies.push(movieObject);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(prevMovies));
    }

    setAddedToList(true)
  }

  const isMovieInList = (storedMovies, toAddMovie) => {
    let inList;
    storedMovies.some(movie => {
      if (movie.movie.movieItem.id === toAddMovie.id) {
        inList = true
        return true // break out of loop
      } else {
        inList = false
      }
    })

    if (inList) { return false } else { return true }
  }

  // Returns dropdown item with corresponding border left color
  const setColorDropdownItems = (value, type) => {
    let i;
    switch (type){
      case 'rating':
        for (i = 0; i < ratings.length; i++){
          switch (value){
            case ratings[i]:
              return <Dropdown.Item style={{borderLeft: COLORS_BORDER_LEFT_RATINGS[i]}} eventKey={value}>{value}</Dropdown.Item>
          }
        }
        break;
      case 'status':
        for (i = 0; i < watchStatus.length; i++){
          switch (value){
            case watchStatus[i]:
              return <Dropdown.Item style={{borderLeft: COLORS_BORDER_LEFT_STATUS[i]}} eventKey={value}>{value}</Dropdown.Item>
          }
        }
    }
  }

  // Handle setting state of dropdown items
  const handleSelectRating=(e)=>{ setRating(e)}
  const handleSelectStatus=(e)=>{ setStatus(e) }

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
          <DropdownButton alignRight title={rating} id="dropdown-menu-align-right" onSelect={handleSelectRating}>
            {ratings.map(rating => setColorDropdownItems(rating, 'rating'))}
          </DropdownButton><br/>

          <Form.Label>Watch status</Form.Label>
          <DropdownButton alignRight title={status} id="dropdown-menu-align-right" onSelect={handleSelectStatus}>
            {watchStatus.map(status => setColorDropdownItems(status, 'status'))}
          </DropdownButton>
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
     <AlertMessage details={detailsAlertMessage}/>
     </Modal>
     }
    </>
  );
} 
