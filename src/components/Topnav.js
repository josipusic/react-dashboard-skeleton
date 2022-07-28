import React, { useContext, useState } from 'react'
import { Context } from './Context'
import styled from 'styled-components'
import default_img from '../images/default-profile-image.jpg'
import LoginForm from './LoginForm'


const TopNav = styled.div`
    grid-column: 2 / -1;

    display: grid;
    grid-template-columns: 200px auto 250px 30px;
    grid-gap: 15px;
    padding: 0 20px;
    align-items: center;
    box-shadow: 0px 15px 50px -30px rgba(178,185,219,1);
`

const Heading = styled.h1`
    font-size: 1.3rem;
    grid-column: 1 / 2;
`

const SearchBar = styled.div`
    grid-column: 3 / 4;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    background-color: #fff;
    height: 40%;
    border:1px solid #e6e6e6;
    border-radius: 4em;

    :hover,
    :focus {
    }

    input {
        font-size: 0.8rem;
        grid-column: 1 / 5;
        padding-left: 11px;
        height: 100%;
        border: none;
        border-radius: 4em;
        background-color: inherit;
        outline: none;
    }

    input::placeholder {
        transition: color 500ms ease;
    }

    input:hover::placeholder,
    input:focus::placeholder {
        color: #fff;
    }

    i {
        grid-column: 5 / -1;
        text-align: center;
    }
`

const ProfileImage = styled.div`
    grid-column: 4 / -1;
    justify-self: end;
    width: 30px;
    height: 30px;
    background-image: url(${default_img});
    background-size: cover;
    cursor: pointer;
    border-radius: 50%;
    transform: scale(1);
    transition: transform 350ms;

    ::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: #0f0;
        opacity: 0;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0.7;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    :hover {
        transform: scale(1.1);
    }

    :hover::before {
        animation: pulse 1s infinite;
    }
`

const ProfilePopup = styled.div`
    position: absolute;
    top: 70px;
    right: 20px;
    z-index: 100;
`


function Topnav() {
    const {heading} = useContext(Context)
    const [searchText, setSearchText] = useState('')
    const [showProfilePopup, setShowProfilePopup] = useState(false)

    function handleSearchBarChange(event) {
        const {value} = event.target
        setSearchText(value)
    }

    function toggleProfilePopup(event) {
        setShowProfilePopup(prevShowProfilePopup => !prevShowProfilePopup)
    }

    return (
        <>
            <TopNav>
                <Heading>{heading}</Heading>
                <SearchBar>
                    <input
                        type='text'
                        value={searchText}
                        onChange={handleSearchBarChange}
                        placeholder='Search for anything...'
                    />
                    <i className='fas fa-search'></i>
                </SearchBar>
                <ProfileImage onClick={toggleProfilePopup} />
                {/* {showProfilePopup ? <ProfilePopup width='500px' height='500px' /> : null} */}
                {showProfilePopup ? 
                    <ProfilePopup>
                        <LoginForm toggleProfilePopup={toggleProfilePopup}/>
                    </ProfilePopup> 
                    : null
                }                
            </TopNav>
        </>
       
    )
}

export default Topnav;
