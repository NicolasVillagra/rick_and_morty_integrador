import React from 'react'
import { styled } from 'styled-components'

const TitleStyle = styled.h1`
color:white;
font-size:70px;
text-stroke: 20px black;
-webkit-text-stroke: 1px black;
font-family:font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Title = () => {
    return (
        <TitleStyle>Rick And Morty</TitleStyle>
    )
}

export default Title