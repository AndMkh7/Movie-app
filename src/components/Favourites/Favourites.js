import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


Favourites.propTypes = {
    isLoggedIn: PropTypes.bool
}


function Favourites ({isLoggedIn}) {
    const navigate = useNavigate ();
    return (
        <>
            {
                !isLoggedIn ? navigate ('/home') :

                    <h4>
                        Favourites List
                    </h4>
            }
        </>
    );
}


export default Favourites;