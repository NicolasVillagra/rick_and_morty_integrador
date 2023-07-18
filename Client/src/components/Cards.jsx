import Card from './Card';
import styles from 'styled-components'

const DivStyle = styles.div`
display:flex;
gap:10px;
justify-content: center;
align-items: center;
`

export default function Cards(props) {
   const {characters,onClose} = props
   return <DivStyle>
      {characters.map((item)=>{
         return <Card 
         key={item.id}
         id = {item.id}
         name={item.name}
         status={item.status}
         species={item.species}
         gender={item.gender}
         origin={item.origin.name}
         image={item.image}
         onClose={onClose}
         />
         

      })}
   </DivStyle>;
}
