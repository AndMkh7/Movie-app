import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {collection,addDoc} from 'firebase/firestore';
// import { db } from "../../firebase-config";
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [user, setUser] = useState ({name: '', surname: '', login: '', password: ''});
    const [error,setError] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = event=> {
        event.preventDefault ();
        createUserWithEmailAndPassword (auth, user.login, user.password)
            .then (res => {
                console.log ("success", res.user.uid)
                setError ("");
                navigate("/")
            })
            .catch(err=>{
                setError(err.message)
            })
    }

    return (
        <div style={{padding:"30px",display:'grid',gap:"10px"}}>
            {error && <p style={{color:"red",fontSize:"30px",fontWeight:"bolder"}}>{error}</p>}
            <form onSubmit={handleSubmit} style={{padding:"30px",display:'grid',gap:"10px"}}>
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
                        label="login"
                        required
                        value={user.login}
                        onChange={e => setUser ({...user, login: e.target.value})}/>
                </div>
                <div>
                    <TextField
                        label="password"
                        required
                        type='password'
                        value={user.password}
                        onChange={e => setUser ({...user, password: e.target.value})}/>
                </div>
                <div>
                    <Button type="submit" >Register</Button>
                </div>
            </form>
        </div>
    )
}

export default Signup;
