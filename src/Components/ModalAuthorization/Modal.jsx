import React from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoAuthorization from "../../Assets/Img/logo_authorization.svg";
import "../../Assets/scss/colors.scss";
import "../../Components/ModalAuthorization/Modal.scss";
import { NavLink } from "react-router-dom";

function Modal({ elModal }) {

    // window.addEventListener("keydown", function (event) {
    //     var handled = false;
    //     if (event.key !== 27) {
    //         elModal.current.classList.remove("modal--open");
    //     }
    // }, true);

    return (
        <div className="modal" ref={elModal} onClick={(evt) => {
            if (
                evt.target.matches(".modal") || evt.target.matches(".modal__close-btn")
            ) {
                elModal.current.classList.remove("modal--open");
            }
        }}>
            <div className="modal__authorization">
                <img className="modal__img-auth" src={LogoAuthorization} alt="logo__auth" />

                <h3 className="modal__title">Saytga kirish</h3>

                <form action="#" className="form">
                    <input className="form__authorization-input input-auth" type="text" placeholder="Email yoki telefon raqam" />
                    <input className="form__authorization-input--password input-auth" type="text" placeholder="Parol*" />
                    <Button className="form__authorization-btn" variant="contained">Saytga Kirish</Button>
                    {/* <a href="#" className="form__authorization-link"></a> */}
                    <NavLink to={"/SignUp"}>
                        <Button className="form__authorization-link">Roʻyxatdan oʻtish</Button>
                    </NavLink>
                </form>

                <IconButton aria-label="close" className="modal__close-btn"></IconButton>
            </div>
        </div >
    );
};

export default Modal;