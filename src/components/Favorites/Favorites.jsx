import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'
import { orderCard,filterCard } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import styles from './Favorite.module.css'
import { useState } from 'react'

const Favorites = ({favorite}) => {
  const [axu, setAxu] = useState(false)
  const dispatch = useDispatch()
  const handleOrder = (e)=>{
    dispatch(orderCard(e.target.value))
    setAxu(true)
  }
  const handleFilter = (e) =>{
    dispatch(filterCard(e.target.value))
  }


  return (
    <div>
      <h1 style={{color:'white',fontSize:'40px'}}>My Favorites</h1>
      <select className={styles.selector} onChange={handleOrder} name="" id="">
        <option value="A">ascendente</option>
        <option value="D">descendente</option>
      </select>
      <select className={styles.selector} onChange={handleFilter} name="" id="">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.container}>
      {favorite.map((item) => (
        <Card  key={item.id}
        id = {item.id}
        name={item.name}
        status={item.status}
        species={item.species}
        gender={item.gender}
        origin={item.origin.name}
        image={item.image}
        onClose = {item.onClose} />
      ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return {favorite: state.favorite}
}

export default connect(mapStateToProps)(Favorites)