import React from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoAuthorization from "../../Assets/Img/logo_authorization.svg";
import "../../Assets/scss/colors.scss";
import "../../Components/ModalAuthorization/Modal.scss";
import { modalClasses } from "@mui/material";

function Modal({ elModal }) {

    return (
        <div className="modal" ref={ elModal } onClick={(evt) => {

            console.log(evt.target)

            if(
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
                    <Button className="form__authorization-link" href="#text-buttons">Roʻyxatdan oʻtish</Button>
                </form>

                <IconButton aria-label="close" className="modal__close-btn"></IconButton>
            </div>
        </div >
    );
};

export default Modal;