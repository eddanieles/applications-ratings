import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from '../base'
import { AuthContext } from '../Auth'

const Login = ({ history }) => {
    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");    
        } catch(error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);
    
    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={ handleSubmit } >
                <label>
                    Email
                    <input name="email" type="email" placeholder="enter email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="text" placeholder="enter password"/>
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);