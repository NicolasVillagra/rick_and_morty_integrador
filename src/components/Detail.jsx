import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { styled } from 'styled-components'

const P = styled.p`
font-size:20px;
`
const Div = styled.div`
background:white;
width:350px;
`
const Container = styled.div`
display:flex;
align-items: center;
flex-direction: column;
`


const Detail = () => {

  const params = useParams()

  const {id} = params

  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 console.log(character)
  return (
    <Container>
      <h1 style={{color:'white'}}>DETALLES DEL PERSONAJE</h1>
      <Div>
      {character.name && <P>Name: {character.name}</P>}
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Species: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && character.origin.name && (
        <p>Origin: {character.origin.name}</p>
      )}
      {character.image && <img src={character.image} alt="Character" />}
      </Div>
    </Container>
  )
}

export default Detail