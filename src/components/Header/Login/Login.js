import React, { useState } from 'react';

const users={
    user1:{
        email:"user1@gmail.com",
        password:"user1*user1"
    },
    user2:{
        email:"user2@gmail.com",
        password:"user2*user2"
    }

}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;
