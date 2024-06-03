import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './LoginFormPage.css'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleCredential = (e) => {setCredential(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}

    if (sessionUser) return <Navigate to="/" replace={true} />

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});
        return dispatch(sessionActions.login({credential, password})).catch(
            async (res) => {
                const data = await res.json();
                if (data?.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label> Username or Email
                    <input
                        type="text"
                        value={credential}
                        onChange={handleCredential}
                    />
                </label>

                <label> Password
                    <input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </label>
                {errors.credential && <p>{errors.credential}</p>}
                <button type="submit">Log In</button>
            </form>
        </>
    );
}

export default LoginFormPage;
