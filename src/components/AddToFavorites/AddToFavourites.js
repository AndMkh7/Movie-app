import React from 'react';
// import {db} from "./../../firebase-config";
// import { collection} from "firebase/firestore";


function AddToFavourites () {
    // const usersList = collection(db , "users")
    return (
        <button onClick={()=>alert("Added to Favorite List")} style={{ position: 'absolute', top: '7px', right: '7px', border :'none',background:'none',  }}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
            >
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
        </button>
    );
}


export default AddToFavourites;