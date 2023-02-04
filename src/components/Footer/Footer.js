import React from 'react';
import s from "./Footer.module.css"
import PropTypes from 'prop-types';

Footer.propTypes={
    filtered:PropTypes.array,
    API_URL:PropTypes.string,
    setFiltered:PropTypes.func,
};

function Footer () {


    return (
        <div className={s.footer}>
            <h1>
                Footer component
            </h1>
        </div>
    )
}

export  default Footer;