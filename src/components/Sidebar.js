import React, {useContext, useEffect} from 'react'
import useWindowWidth from '../hooks/useWindowWidth'
import {Link} from 'react-router-dom'
import {Context} from './Context'
import styled from 'styled-components'
import theme from '../theme/theme'
import default_img from '../images/default-profile-image.jpg'


const SideBar = styled.div`
    background-color: #4f66df;
    padding: 0 10%;
    grid-row: 1 / -1;
    border-radius: 1em;
    margin: .4em;
    margin-right: 0;

    display: grid;
    grid-template-rows: 70px auto 70px;
    justify-items: center;
    align-items: center;

    position: relative; // because of the ActiveLinkText.selected-pointer which is absolute
`

const LogoArea = styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-top: 1.2em;
`

const Logo = styled.div`
    min-width: 40px;
    height: 40px;
    background-image: url(${default_img});
    background-size: cover;
    cursor: pointer;
    border-radius: 50%;
`

const CompanyName = styled.h2`
    margin-left: 20px;
    font-size: 1.3rem;
    @media ${({theme: {mediaQueries}}) => mediaQueries.big} {
        visibility: hidden;
    }
`

const NavMenu = styled.div`
    color: #b8c0f2;
    margin-right: ${({isOpen}) => isOpen ? '30px' : '0'};
    height: 60%;
    min-height: 220px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;

    color: #fff;
    text-decoration: none;
    /* font-size: 1.2rem; */


    i {
        padding: 0 auto;
        transition: transform 150ms;
        font-size: 1.3rem;
    }

    i.fas {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    i.active.fas {
        background-color: #f4f5fc;
    }

    i.active::before {
        color: #4f66df;
    }
`

const LinkText = styled.div`
    font-size: 1.1rem;
`

const ActiveLinkText = styled(LinkText)`
    display: flex;

    // side pointer

    .pointer-container {
        display: flex;
        align-items: center;
    }

    .pointer {
        position: absolute;
        right: 0;
        width: 28px;
        height: 30px;
        cursor: context-menu;
    }

    .top-pointer-below {
        transform: translateY(-29px);
        z-index: 1;
        border-top-left-radius: 60%;
        border-top-right-radius: 60%;
        border-bottom-left-radius: 100%;
        background-color: #FFF;
    }

    .top-pointer {
        transform: translateY(-30px);
        background-color: #4f66df;
        border-bottom-right-radius: 70%;
        z-index: 2;
    }

    .middle-pointer {
        background-color: #FFF;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }

    .bottom-pointer-below {
        transform: translateY(29px);
        z-index: 1;
        border-top-left-radius: 100%;
        border-bottom-right-radius: 60%;
        border-bottom-left-radius: 60%;
        background-color: #FFF;
    }

    .bottom-pointer {
        transform: translateY(30px);
        background-color: #4f66df;
        border-top-right-radius: 70%;
        z-index: 2;
    }
`

const InactiveLinkText = styled(LinkText)``

const ResizeButton = styled.div`
    justify-self: ${({isOpen}) => isOpen ? 'end' : 'center'};
    align-self: end;
    margin-bottom: 20px;
    border-radius: 50%;
    width: 1.8em;
    height: 1.8em;
    background-color: #485cc9;
    cursor: pointer;
    transition: background-color 350ms ease;

    :hover {
        background-color: #fff;
    }

    ::before {
        content: '${({icon}) => icon}';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        display: inline-block;
        color: #fff;
        width: 100%;
        height: 100%;
        line-height: 29px; 
        text-align: center;
        vertical-align: middle;
        transform: ${({isOpen}) => isOpen ? '' : 'rotate(180deg)'};
        transition: -webkit-transform 500ms ease-in-out, color 10ms ease;
    }

    :hover::before {
        color: #485cc9;
    }

    @media ${({theme: {mediaQueries}}) => mediaQueries.big} {
        visibility: hidden;
    }
`

function Sidebar() {
    const windowWidth = useWindowWidth()
    const {heading, changeHeading, sidebarIsOpen, toggleSidebarIsOpen} = useContext(Context)

    const links = [
        {
            key: 0,
            text: 'Dashboard',
            to: '/',
            icon: 'fas fa-chart-pie fa-fw'
        },
        {
            key: 1,
            text: 'Profile',
            to: '/profile',
            icon: 'fas fa-user fa-fw'
        },
        {
            key: 2,
            text: 'Customers',
            to: '/customers',
            icon: 'fas fa-users fa-fw'
        },
        {
            key: 3,
            text: 'Settings',
            to: '/settings',
            icon: 'fas fa-cog fa-fw'
        }
    ]

    const [bigWindowWidth] = theme.mediaQueries.big.match(/\d+/g)
    const openSidebarAndBigScreen = sidebarIsOpen && windowWidth > bigWindowWidth

    useEffect(() => {
        if (windowWidth <= bigWindowWidth && windowWidth !== 0 && sidebarIsOpen) {
            toggleSidebarIsOpen()
        }
      }, [windowWidth]);

    const LoadLink = (linkText) => {
        const text = openSidebarAndBigScreen ? linkText : null;
        if (heading === linkText) {
            return (
                    <ActiveLinkText isOpen={sidebarIsOpen}>
                        {text}
                        {sidebarIsOpen ? 
                            <div className='pointer-container'>
                                <div className='pointer top-pointer'></div>
                                <div className='pointer top-pointer-below'></div>
                                <div className='pointer middle-pointer'></div>
                                <div className='pointer middle-pointer-wide'></div>
                                <div className='pointer bottom-pointer'></div>
                                <div className='pointer bottom-pointer-below'></div>
                            </div> 
                        : null}
                    </ActiveLinkText>
                )
        } else {
            return <InactiveLinkText isOpen={sidebarIsOpen}>{text}</InactiveLinkText>
        }
    }

    const navLinks = links.map(link => 
        <NavLink
            key={link.key}
            to={link.to}
            onClick={() => changeHeading(link.text)}
        >
            <i className={`${link.icon} ${((heading === link.text && !sidebarIsOpen) ? 'active' : '')}`}></i>
            {LoadLink(link.text)}
        </NavLink>
        )

    return (
        <SideBar>
            <LogoArea>
                <Logo />
                {openSidebarAndBigScreen ? <CompanyName>Company</CompanyName> : null}
            </LogoArea>
            <NavMenu isOpen={sidebarIsOpen}>
                {navLinks}
            </NavMenu>
            <ResizeButton isOpen={sidebarIsOpen} icon='\f100' onClick={toggleSidebarIsOpen} />
        </SideBar>            
    )
}

export default Sidebar