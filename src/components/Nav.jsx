import React from 'react'
import SearchBar from './SearchBar'
import { styled } from 'styled-components'
import SearchRandom from './SearchRandom'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from './Css_Modules/Nav.module.css'

const Nav = (props) => {
    let location = useLocation()


    const {onSearch,onRandom} =props
    return (
    <nav className={`${styles.nav} ${(location.pathname === "/")? styles.disabled : null}`}>
            <Link to="/Favorites">Favoritos</Link>
            <Link to="/Home">Home</Link>
            <Link to="/about">About</Link>
            <SearchRandom onRandom={onRandom} />
            <SearchBar onSearch={onSearch} />
        </nav>
    )
    }

export default Nav