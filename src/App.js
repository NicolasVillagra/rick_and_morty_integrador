import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import './components/Css_Modules/App.module.css'
import Title from './components/Title';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';



function App() {

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
    };

   const [characters, setCharacters] = useState([])
   
console.log(characters);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   
   function onRandom() {
      const randomNumber = Math.floor(Math.random()*827)
      axios(`https://rickandmortyapi.com/api/character/${randomNumber}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   } 
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch} onRandom={onRandom} />
         <Title/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
