import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session'
import '../LoginFormModal/LoginFormModal.css'

function SignupFormModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( password === confPassword ) {
            setErrors([]);
            return dispatch(sessionActions.signupUser({ email, password }))
            .catch(async (res) => {
                    let data;
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text(); // Will hit this case if the server is down
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        }
        return setErrors(['Confirm Password field must match Password field.'])
    }
    
    return (
        <>
            <h2>Enter your email</h2>
            <h3>Enter the email associated with your social login or new email.
            </h3>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <input
                    type="email"
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    type="password"
                    value={confPassword}
                    placeholder='Confirm Password'
                    onChange={(e) => setConfPassword(e.target.value)}
                    required
                />
                <button className="button" type="submit">Continue</button>
            </form>
        </>
    );
}

export default SignupFormModal;