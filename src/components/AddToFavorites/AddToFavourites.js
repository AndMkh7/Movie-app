import React from 'react';
import {db} from "./../../firebase-config";
import {addDoc, collection} from "firebase/firestore";


function AddToFavourites () {
    const favouritesList = collection(db , "favourites")
    return (
        <div>

        </div>
    );
}


export default AddToFavourites;