import React from 'react';
import { RingLoader } from 'react-spinners';
import s from "./Loader.module.css";
import PropTypes from 'prop-types';


Loader.propTypes={
    loading:[PropTypes.bool],
}

function Loader ({loading}) {
    return (
        <div className={s.loader}>
            <RingLoader
                color="#11ecc0"
                size={150}
                speedMultiplier={1}
                loadin={loading}
            />
        </div>
    );
}

export default Loader;