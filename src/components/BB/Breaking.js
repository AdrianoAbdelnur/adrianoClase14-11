import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import './breaking.css'

const Breaking = ({ cont, setCont }) => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    handleGetCharapters();
  }, [])

  const handleGetCharapters = async () => {
    try {
      const charactersData = await axios('https://breakingbadapi.com/api/characters');
      setCharacters(charactersData.data);
    } catch (error) {
      console.log(error)
      alert('Characters not found');
    }
    
    try {
      const episodesData = await axios('https://breakingbadapi.com/api/episodes');
      setEpisodes(episodesData.data);
    } catch (error) {
      alert('Episodes not found');
    }
    
   
    setCont(1)
  }

  useEffect(() => {
    if (cont !== 0 && episodes.length !== 0 && characters.length !== 0) {
      setPersonajes([])
      findcharacters()
    }
  }, [cont, episodes, characters])

  useEffect(() => {
    console.log(personajes)
  }, [personajes])


  const findcharacters = () => {
    if (cont > 0) {
      const seteoPersonajes = [];
      for (const char of episodes[cont - 1]?.characters) {
        for (const personaje of characters) {
          if (personaje.name === char) {
            /*       console.log(personaje.name+ ' Personaje')
                  console.log(char + ' en el capitulo')
                  console.log(personaje) */
            /* setPersonajes([...personajes, personaje]) */
            seteoPersonajes.push(personaje)
          }
        }
      }
      setPersonajes(seteoPersonajes)
    }
  }
  return (
    <div className='Breaking_container'>
      {
          personajes.length ? (
          personajes?.map((character) => (
          <Card key={character.char_id} className='card' style={{ width: '18rem' }}>
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
                <>LOADING...</>
          )
      }
    </div>
  )
}

export default Breaking