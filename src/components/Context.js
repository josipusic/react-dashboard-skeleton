import React, {useState} from 'react'

// Wrapping provider component with ContextProvider

// Context is compound component (object with properties Context.Provider and Context.Consumer)
const Context = React.createContext()

// TODO: persist heading on page reload (title is always returned to "Dashboard" on reload)

function ContextProvider(props) {
    // TODO: Set storage object and save properties inside it to avoid colissions
    const [heading, setHeading] = useState(sessionStorage.getItem('heading') || 'Dashboard')
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

    function changeHeading(heading) {
        setHeading(heading)
        // on page reload heading is set to 'Dashboard'. This solves issue if you're on another route.
        sessionStorage.setItem('heading', heading)
    }

    function toggleSidebarIsOpen() {
        setSidebarIsOpen(prevSidebarIsOpen => !prevSidebarIsOpen)
    }
    
    return (
        <Context.Provider
            value={
                {
                    heading,
                    changeHeading,
                    sidebarIsOpen,
                    toggleSidebarIsOpen
                }
            }
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
