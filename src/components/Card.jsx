import styles from 'styled-components'
import { Link } from 'react-router-dom'
import { addFav,removeFav } from '../redux/actions'
import { Connect, connect } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const CardStyle = styles.div`
width: 300px;
display: flex;
flex-direction: column-reverse;
height: 700px;
background: #5E4AE3;
border-radius: 20px;
color:white;
`
const ImgStyle = styles.img`
width: 250px;
height: 280px;
padding: 10px;
border-radius: 20px;
`
export function Card(props) {
   const {name,status,species,gender,origin,image,onClose,id,myFavorites} = props


   useEffect(() => {
      setIsFav(myFavorites.includes(id));
    }, [myFavorites, id]);

   const handleClick = () =>{
      onClose(id)
   }
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         addFav(id)
      }
      else{
         setIsFav(true)
         removeFav(id)
      }

   }
   return (
      <CardStyle key={id}>
         <div className='button'>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         </div>
        <button onClick={handleClick}>X</button>
        <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <ImgStyle src={image}alt='' /> 
      </CardStyle>
   );
}
const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   };
 };
const mapDispatchToProps = (dispatch)=>{
   return {
   addFav: (id) =>{dispatch(addFav(id))},
   removeFav: (id) => {dispatch(removeFav(id))}
   }

}
export default connect(mapStateToProps,mapDispatchToProps)(Card)
