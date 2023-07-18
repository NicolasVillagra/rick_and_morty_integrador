import React from 'react'
import styles from './Css_Modules/SearchBar.module.css'

const SearchRandom = (props) => {
    const {onRandom} = props

  return (
        <div className={styles.inputGroup}>
           <button onClick={onRandom}>
              {/* <span className={styles.transition}></span>
              <span className={styles.gradient}></span> */}
              <span className={styles.label}>Agregar Random</span>
           </button>
        </div>
  )
}

export default SearchRandom