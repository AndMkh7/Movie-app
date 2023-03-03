import React from 'react';
import { RingLoader, ScaleLoader } from 'react-spinners';
import s from './Loader.module.css';
import PropTypes from 'prop-types';


Loader.propTypes = {
    loading: PropTypes.bool,
}

export const LoadMore = () => {
    return (<div className={s.loadMore}>
        <ScaleLoader
            color="#090b0a"
            height={70}
        />
    </div>)
}


function Loader ({loading}) {
    return (<div className={s.ringLoader}>
        <RingLoader
            color="#11ecc0"
            size={150}
            speedMultiplier={1}
            loading={loading}
        />
    </div>);
}


export default Loader;