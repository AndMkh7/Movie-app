import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Login.module.css';
import Footer from '../Footer/Footer';


Login.propTypes = {
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
                    setIsLoggedIn (true);
                    console.log ('This user logged in', user.login)
                    navigate ('/home')
                }
            )
            .catch ((err) =>
                setError (err.message))
    }


    return (
        <>
            <div className={s.login}>
                <h3>Sign in or go to <Link to="/home"
                                           style={{fontSize: '25px', fontStyle: 'italic', textDecoration: 'none'}}>Home
                    page</Link> for anonymous mode </h3>
                <Box sx={{width: 3 / 4, maxWidth: '450px', minWidth: '230px'}}>
                    {error && <h4 style={{color: 'tomato', fontStyle: 'italic'}}>Invalid email or password</h4>}
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
                        <div style={{display: 'flex', gap: '20px'}}>

                            <Button variant="contained" type="submit">Login</Button>

                            <h3><Link to="/signup" style={{fontSize: '25px', textDecoration: 'none'}}>or Create
                                Account</Link></h3>
                        </div>

                    </form>
                </Box>
            </div>
            <Footer/>
        </>

    )
}


export default Login;
