import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Card, Spinner} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  let navigate = useNavigate()
  const [listCharacters, setListCharacters] = useState([]);
  const [newCharacters, setNewCharacters] = useState([]);
  const [searcher, setSearcher] = useState("");
  
  const handleSearch = (e) => {
      setSearcher(e.target.value);
  }

  useEffect(() => {
    const filterCharacters = listCharacters.filter((character) => 
    (character?.name?.toLowerCase()?.includes(searcher?.toLowerCase())
    ));
    setNewCharacters(filterCharacters)
  }, [searcher])

  const handleGetCharapters = async () => {
    try {
      const charactersData = await axios('https://breakingbadapi.com/api/characters');
      setListCharacters(charactersData.data);
      localStorage.setItem('localCharacters', JSON.stringify(charactersData.data));
    } catch (error) {
      console.log(error)
      alert('Characters not found');
    }
    const localCharacters = JSON.parse(localStorage.getItem('localCharacters'))
    setListCharacters(localCharacters)
    setNewCharacters(localCharacters)
  }

  useEffect(() => {
    const localCharacters = JSON.parse(localStorage.getItem('localCharacters'))
    if(!localCharacters){
        handleGetCharapters(); 
      } else {
        setListCharacters(localCharacters)
        setNewCharacters(localCharacters)
    }

  }, []) 

  return (
    <div className='home_container'>
      <input className='searcher w-25' name='search' placeholder='Search a character' onChange={(e) => handleSearch(e)} ></input>
      <h2>Characters list</h2>
      <div className='charactersCards'>
        {
          newCharacters.length ? (
            newCharacters?.map((character) => (
              <Card key={character.char_id} className='cardHome' onClick={() => navigate(`/details#${character.char_id}`)} style={{ width: '18rem'}}>
              <Card.Img variant="top" src={character.img} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <div>
                  <ul>
                    <li>birthday: {character.birthday}</li>
                    <li>nickname: {character.nickname}</li>
                    <li>occupation: {character.occupation}</li>
                    <li>status: {character.status}</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          ))
          ) : (
            <Spinner className='spinnerLoading' animation="border" variant="success" />      
          )
          }
        </div>
    </div>
  )
}

export default Home
