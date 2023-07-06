import React from 'react'
import SearchBar from './SearchBar'
import { styled } from 'styled-components'
import SearchRandom from './SearchRandom'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from './Css_Modules/Nav.module.css'

const Nav = (props) => {
    let location = useLocation()


    const {onSearch,onRandom} =props
    return (
    <nav className={`${styles.nav} ${(location.pathname === "/")? styles.disabled : null}`}>
            <NavLink to="/Favorites" className={styles.buttonStyles}>Favoritos</NavLink>
            <NavLink to="/Home" className={styles.buttonStyles}>Home</NavLink>
            <NavLink to="/about" className={styles.buttonStyles}>About</NavLink>
            <SearchRandom onRandom={onRandom} />
            <SearchBar onSearch={onSearch} />
        </nav>
    )
    }

export default Nav