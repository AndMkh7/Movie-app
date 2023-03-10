import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import s from './Signup.module.css'
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';


Signup.propTypes = {
    setIsLoggedIn: PropTypes.func,
}


function Signup ({setIsLoggedIn}) {
    const [user, setUser] = useState ({name: '', surname: '', login: '', password: '', favourites :[]});
    const [error, setError] = useState ('');
    const auth = getAuth ();
    const navigate = useNavigate ();




    const handleSubmit = event => {

        event.preventDefault ();
        createUserWithEmailAndPassword (auth, user.login, user.password)
            .then (async res => {
                console.log ('success', res.user.uid)

                const userList = doc(db, "users", res.user.uid);

                await (setDoc (userList, {
                    name: user.name,
                    surname: user.surname,
                    favourites: user.favourites,
                    userId: res.user.uid
                }));
                setIsLoggedIn (true);
                setError ('');

                navigate ('/home')
            })
            .catch (err => {
                setError (err.message)
            })
    }

    return (
        <>
            <div className={s.signup}>

                {error && <p style={{color: 'red', fontSize: '30px', fontWeight: 'bolder'}}>{error}</p>}
                <h4>Please fill in the registration fields !!!</h4>
                <form onSubmit={handleSubmit} style={{padding: '30px', display: 'grid', gap: '10px'}}>
                    <div>
                        <TextField
                            label="name"
                            value={user.name}
                            onChange={e => setUser ({...user, name: e.target.value})}/>
                    </div>
                    <div>
                        <TextField
                            label="surname"
                            value={user.surname}
                            onChange={e => setUser ({...user, surname: e.target.value})}/>
                    </div>
                    <div>
                        <TextField
                            label="email"
                            required={true}
                            value={user.login}
                            onChange={e => setUser ({...user, login: e.target.value})}/>
                    </div>
                    <div>
                        <TextField
                            label="password"
                            required={true}
                            type="password"
                            value={user.password}
                            onChange={e => setUser ({...user, password: e.target.value})}/>
                    </div>
                    <div>
                        <Button type="submit" style={{border: 'solid'}}>Register</Button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>

    )
}


export default Signup;
