import React from 'react'
import SearchBar from './SearchBar'
import { styled } from 'styled-components'
import SearchRandom from './SearchRandom'

const NavStyle = styled.nav`
width:100%;
background:rgba(0, 0, 0, 0.199);
height:100px;
display:flex;
align-items: center;
justify-content: flex-end;
`

const Nav = (props) => {

    const {onSearch,onRandom} =props
    return (
        <NavStyle>
            <SearchRandom onRandom={onRandom} />
            <SearchBar onSearch={onSearch} />
        </NavStyle>
    )
}

export default Nav