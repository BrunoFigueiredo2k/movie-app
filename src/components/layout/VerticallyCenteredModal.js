import React, {useEffect, useState} from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button'
import uuidv4 from 'uuid/v4';
import Form from 'react-bootstrap/Form'
import AlertPositive from './AlertPositive'
import {LOCAL_STORAGE_KEY, ALERT_POSITIVE_ADDED_CONTENT, watchStatus, ratings, COLORS_BORDER_LEFT_RATINGS, COLORS_BORDER_LEFT_STATUS} from '../strings'
import {getCurrentDate} from '../utils'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function VerticallyCenteredModal(props) {
  const [myMovies, setMyMovies] = useState([])
  const [rating, setRating] = useState('Select your rating')
  const [status, setStatus] = useState('Watching')
  const [addedToList, setAddedToList] = useState(false)

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myMovies))
  }, [myMovies])

  const addMovieToList = (e) =>{
    const movieItem = props.movie;

    setMyMovies(prevMovies =>{
        return [...prevMovies, {id: uuidv4(), movie: {movieItem}, userStats: {rating, status}, date: getCurrentDate}]
    })

    setAddedToList(true)
  }

  console.log(myMovies)

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
     <AlertPositive details={{hideBtn: {display: true, route: '/'}, content: ALERT_POSITIVE_ADDED_CONTENT}}/>
     </Modal>
     }
    </>
  );
} 
