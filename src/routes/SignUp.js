import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from '../base'

const SignUp = ({ history }) => {
    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");    
        } catch(error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={ handleSubmit } >
                <label>
                    Email
                    <input name="email" type="email" placeholder="enter email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="text" placeholder="enter password"/>
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);