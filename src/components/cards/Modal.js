import React from 'react'
import styled from 'styled-components'
import Card from './Card'


const StyledModal = styled.div`
    width: 100px;
    height: 100px;
    position: absolute; //
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: green;
    z-index: 1;
`


function Modal(props) {
    return <StyledModal></StyledModal>
}

export default Modal