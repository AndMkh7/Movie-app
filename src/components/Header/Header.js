import React, { useState } from 'react';
import s from "./Header.module.css";
import logo from "./../../images/logo.png"
import Login from './Login/Login';



function Header () {

    const [isLoggedIn , setIsLoggedIn] = useState(true);



    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt="logo"/>
            <div className={s.buttons}>

                {
                    isLoggedIn ?
                        <>
                            <button className={s.btn}>Home</button>
                            <button className={s.btn}>Favorites</button>
                            <button className={s.btn} onClick={()=>{
                                setIsLoggedIn(false)
                            }
                            }>Logout</button>

                        </>
                        : <Login/>

                }


            </div>

        </div>
    )
}

export  default Header;