import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import App from './components/App'
import {ContextProvider} from "./components/Context"
import {ThemeProvider} from 'styled-components'
import Theme from './theme/theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <ContextProvider>
                <Router>
                    <App/>
                </Router>
            </ContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// ReactDOM.render(
//     <ThemeProvider theme={Theme}>
//         <ContextProvider>
//             <Router>
//                 <App/>
//             </Router>
//         </ContextProvider>
//     </ThemeProvider>, 
//     document.getElementById("root")
// )
