import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'

const Favorites = ({myFavorites}) => {
  return (
    <div>
      <h1>My Favorites</h1>
      {myFavorites.map((item) => (
        <Card  key={item.id}
        id = {item.id}
        name={item.name}
        status={item.status}
        species={item.species}
        gender={item.gender}
        origin={item.origin.name}
        image={item.image} />
      ))}
    </div>
  )
}
const mapStateToProps = (state)=>{
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps)(Favorites)