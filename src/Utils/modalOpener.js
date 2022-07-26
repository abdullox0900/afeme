import React, { useContext } from "react";

function CheckUserLogin(e, user) {

    e.preventDefault();

    if (user.hasOwnProperty('data')) {
        console.log("links allowed!");
    } else {
        document.querySelector('.loginModal').classList.add('modal--open');
    }
}
export default CheckUserLogin