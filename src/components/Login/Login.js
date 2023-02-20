import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from "./Login.module.css";
import Footer from '../Footer/Footer';

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    setIsLoggedIn: PropTypes.func
}


function Login ({setIsLoggedIn}) {

    const [user, setUser] = useState ({login: '', password: ''});
    const [error, setError] = useState ('');
    const navigate = useNavigate ();
    const auth = getAuth ();

    const handleSubmit = event => {
        event.preventDefault ();
        signInWithEmailAndPassword (auth, user.login, user.password)
            .then (() => {
                    navigate ('/home')
                    setIsLoggedIn (true)
                }
            )
            .catch ((err) =>
                setError (err.message))
    }


    return (
        <>
            <div className={s.login}>
                <h3>Sign in</h3>
                <Box sx={{width: 3/4 , maxWidth:"450px", minWidth:"230px"}} >
                    {error && <h4>{error}</h4>}
                    <form onSubmit={handleSubmit} style={{padding: '30px', display: 'grid', gap: '10px'}}>
                        <div>
                            <TextField
                                reduired="true"
                                fullWidth
                                label="Email address"
                                value={user.login}
                                onChange={e => setUser ({...user, login: e.target.value})}
                            />
                        </div>
                        <div>
                            <TextField
                                reduired="true"
                                fullWidth
                                type="password"
                                label="Password"
                                value={user.password}
                                onChange={e => setUser ({...user, password: e.target.value})}
                            />
                        </div>
                        <div>
                            <Button variant="contained" type="submit">Login</Button>
                        </div>

                    </form>
                </Box>
            </div>
            <Footer/>
        </>

    )
}


export default Login;
