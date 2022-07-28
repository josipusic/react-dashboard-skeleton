import React, {useState} from "react"
import styled from 'styled-components'


const StyledLoginForm = styled.div`
    background-color: ${({color}) => color ? color : '#fff'};
    width: 300px;
    height: 100%;
    padding: 20px;
    border-radius: 1em;
    box-shadow: 0px 14px 50px -19px rgba(178,185,219,1);
`

const CloseButton = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #F6F6FB;
    cursor: pointer;

    ::before {
        content: '${({icon}) => icon}';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        display: inline-block;
        color: #989898;
        width: 100%;
        height: 100%;
        line-height: 26px; 
        text-align: center;
        vertical-align: middle;
`


export default function LoginForm(props) {
    const { toggleProfilePopup } = props

    const [formData, setFormData] = useState({username: "", password: ""})

    function handleChange(e) {
        const { value, name } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    const headingStyle = {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1em"
    }

    const inputStyle = {
        width: "100%",
        height: "2em",
        marginTop: ".5em",
        border: "1px solid #989898",
        borderRadius: ".5em",
        paddingLeft: "10px"
    }

    const forgotPassStyle = {
        textAlign: "center",
        color: "#4f66df",
        fontSize: ".8rem",
        marginTop: ".5em"
    }

    return (
        <StyledLoginForm>
            <div style={headingStyle}>
                <p>Log In</p>
                <CloseButton icon='\f00d' onClick={toggleProfilePopup} />
            </div>

            <form onSubmit={handleSubmit}>
                <input 
                    name="username"
                    value={formData.username}
                    type="text"
                    style={inputStyle}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    name="password"
                    value={formData.password}
                    type="password"
                    style={inputStyle}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <p style={forgotPassStyle}>Forgot your password?</p>
                <button>LOGIN</button>
            </form>
        </StyledLoginForm>
    )
}