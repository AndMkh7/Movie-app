import React from 'react';
import { ClipLoader } from 'react-spinners';
import s from "./Loader.module.css";

function Loader () {
    return (
        <div className={s.loader}>
            <ClipLoader
                color="#11ecc0"
                loading={true}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;