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

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access]);

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
    };

   const [characters, setCharacters] = useState([]);
   

   function onSearch(dato) {

      if(dato > 876){
         window.alert('no hay id con ese personaje')
      }
      else{
         axios(`http://localhost:3001/rickandmorty/character/${dato}`)
         .then((respuesta) => {
           if (respuesta.data.character.name) {
             // antes de agregar busco si "ya existe". Como lo harias?
             // tu codigo aquí:
             // if("yaExiste") return
             setCharacters((oldChars) => [...oldChars, respuesta.data.character]);
           } else {
           }
         })
         .catch((err) => alert(err.response.data.error));
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
