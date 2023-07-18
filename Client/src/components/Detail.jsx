import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { styled } from 'styled-components'
import styles from './Css_Modules/Detail.module.css'

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
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => {
        if (response.data.character.name) {
          setCharacter(response.data.character);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert(err));

    return () => {
      console.log("Me desmonto, adios!");
    };
  }, []);
 console.log(character)
  return (
    <Container>
    <div className={styles.myCard}>
    <div className={styles.innerCard}>
      <div className={styles.frontSide}>
        {character.image && <img src={character.image} alt="Character" />}
      </div>
      <div className={styles.backSide}>
         {character.name && <P>Name: {character.name}</P>}
      {character.status && <p>Status: {character.status}</p>}
     {character.species && <p>Species: {character.species}</p>}
     {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && character.origin.name && (
       <p>Origin: {character.origin.name}</p>
     )}
      </div>
    </div>
  </div>
  </Container>
    // <Container>
    //   <h1 style={{color:'white'}}>DETALLES DEL PERSONAJE</h1>
    //   <Div>
    //   {character.name && <P>Name: {character.name}</P>}
    //   {character.status && <p>Status: {character.status}</p>}
    //   {character.species && <p>Species: {character.species}</p>}
    //   {character.gender && <p>Gender: {character.gender}</p>}
    //   {character.origin && character.origin.name && (
    //     <p>Origin: {character.origin.name}</p>
    //   )}
    //   {character.image && <img src={character.image} alt="Character" />}
    //   </Div>
    // </Container>
  )
}

export default Detail