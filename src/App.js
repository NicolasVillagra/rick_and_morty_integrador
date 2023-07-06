import './App.css';
import Cards from './components/Cards';
import './components/Css_Modules/App.module.css'
import Title from './components/Title';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail'
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';



function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const email ="nicovillagra123@gmail.com"
   const password = "Santiago12"

   const login = (userData) =>{
      if(userData.email === email && userData.password === password ){
         setAccess(true)
         navigate('/home')
      }

   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
    };

   const [characters, setCharacters] = useState([]);
   

   function onSearch(id) {

      if(id > 876){
         window.alert('no hay id con ese personaje')
      }
      else{
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
            else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }


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

         <Nav onSearch={onSearch} onRandom={onRandom}/>
         <Title/>
         <Routes>
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path='/' element={<Form login= {login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>

      </div>
   );
}

export default App;
