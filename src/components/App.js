import '../css/style.css'
import React, {useContext} from 'react'
import {Context} from './Context'
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Customers from './content/Customers'
import Settings from './Settings'
import Modal from './cards/Modal'


const AppLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: ${({isOpen}) => isOpen ? '230px' : '90px'} auto;
    grid-template-rows: 70px auto;
    // background-color: #f4f5fc;

    // for now animatable only on firefox
    transition: grid-template-columns 350ms;

    @media ${({theme: {mediaQueries}}) => mediaQueries.big} {
        grid-template-columns: 90px auto;
    }
`

const ContentLayout = styled.div`
    grid-row: 2 / -1;
    grid-column: 2 / -1;
    overflow-y: auto;
    padding: 20px;
    // position: relative; // for modal to be positioned absolutely inside content
`

function App() {
    const {sidebarIsOpen} = useContext(Context)
    return (
        <AppLayout isOpen={sidebarIsOpen}>
            <Sidebar />
            <Topnav />
            <ContentLayout>
                <Switch>
                    <Route exact path='/'>
                        <Dashboard />
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/customers'>
                        <Customers />
                    </Route>
                    <Route path='/settings'>
                        <Settings />
                    </Route>
                </Switch>
            </ContentLayout>
        </AppLayout>
    )
}

export default App
