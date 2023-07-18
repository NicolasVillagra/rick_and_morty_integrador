import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { addFav,removeFav } from '../redux/actions'
import { Connect, connect, useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Css_Modules/Card.module.css'

const CardStyle = styled.div`
width: 300px;
display: flex;
flex-direction: column-reverse;
height: 700px;
background: #5E4AE3;
border-radius: 20px;
color:white;
align-items: center;
`
const ImgStyle = styled.img`
width: 250px;
height: 280px;
padding: 10px;
border-radius: 20px;
`
function Card(props) {
   const {name,status,species,gender,origin,image,onClose,id,removeFav,addFav,favorite} = props
   
   const handleClick = () =>{
      onClose(id)
   }
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
     if (isFav) {
       setIsFav(false);
       removeFav(id)
     } else {
       setIsFav(true);
       addFav({name,status,species,gender,origin,image,onClose,id})
     }
   };
   useEffect(() => {
    console.log(favorite)
    favorite.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [favorite]);

   return (
      <CardStyle key={id}>
        <NavLink to={`/detail/${id}`} className={styles.buttonDetail}>
         <h2>{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <ImgStyle src={image}alt='' />
         <div className={styles.buttonContainer}>
         {
   isFav ? (
      <button className={styles.buttonFav} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={styles.buttonFav} onClick={handleFavorite}>🤍</button>
   )
}
<button className={styles.buttonStyles} onClick={handleClick}>❌</button>
         </div>
      </CardStyle>
   );
}
export const mapDispatchToProps = (dispatch)=>{
   return {
      addFav:(character) => {
         dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }

}
export const mapStateToProps =(state) =>{
   return {
      favorite: state.favorite
   }
}
export default connect (mapStateToProps,mapDispatchToProps)(Card)