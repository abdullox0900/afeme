import React, { useContext } from "react";

function CheckUserLogin(e, user) {

    if (!user.hasOwnProperty('data')) {
        e.preventDefault();
        document.querySelector('.loginModal').classList.add('modal--open');
    }
}
export default CheckUserLogin