import styles from 'styled-components'

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
export default function Card(props) {
   const {name,status,species,gender,origin,image,onClose,id} = props

   const handleClick = () =>{
      onClose(id)
   }
   return (
      <CardStyle key={id}>
        <button onClick={handleClick}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <ImgStyle src={image}alt='' /> 
      </CardStyle>
   );
}
