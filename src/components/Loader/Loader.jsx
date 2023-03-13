import React, { useContext } from 'react';
import { RingLoader, ScaleLoader } from 'react-spinners';
import s from './Loader.module.css';
import { homePageContext } from '../../App';



export const LoadMore = () => {

    return (<div className={s.loadMore}>
        <ScaleLoader
            color="#090b0a"
            height={70}
        />
    </div>)
}


function Loader () {
    const {loading} = useContext(homePageContext)

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