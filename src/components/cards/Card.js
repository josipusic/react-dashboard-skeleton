import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
    background-color: ${({color}) => color ? color : '#fff'};
    width: ${({width}) => width ? width : '100%'};
    height: 100%;
    padding: 20px;
    border-radius: 1em;
    box-shadow: 0px 14px 50px -19px rgba(178,185,219,1);
    // display: inline-block;
    transition: box-shadow 250ms;
    
    :hover {
        box-shadow: none;
    }
`

const CardHeading = styled.h1`
    font-size: 1rem;
    margin-bottom: 1em;
`

function Card(props) {
    return (
        <CardStyle width={props.width}  color={props.color}>
            <CardHeading>{props.heading ? props.heading.toUpperCase() : ''}</CardHeading>
            {props.children}
        </CardStyle>
    )
}

export default Card