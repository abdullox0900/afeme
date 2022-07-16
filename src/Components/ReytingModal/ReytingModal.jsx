// Import => React
import React from "react";
import { useState } from "react";

// Import => Style Component
import "../../Components/ReytingModal/ReytingModal.scss";
import StarIcon from "../../Lib/Svg/star";
import ReactStars from "react-rating-stars-component";

// Import => Mui
import Button from '@mui/material/Button';

let url = process.env.REACT_APP_URL;

function ReytingModal({ userId, userData, elReytingModal }) {
    const [reting, setReting] = useState('')
    const [comment, setComment] = useState('')

    const Rating = {
        size: 50,
        count: 5,
        color: "#dee7ee",
        activeColor: "gold",
        value: 0,
        a11y: true,
        isHalf: false,
        emptyIcon: <StarIcon width="40px" height="40px" />,
        onChange: newValue => {
            setReting(`${newValue}`);
        }
    }
    let token = localStorage.getItem('Token')
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    let data = new FormData();
    data.append('user_id', userId);
    data.append('comment', comment);
    data.append('reting', reting);
    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: data,
        redirect: 'follow'
    };
    function onSubmit() {
        fetch(`${url}reting`, requestOptions)
            .then(response => response.text())
            .then(function (response) {
                elReytingModal.current.classList.remove("reyting-mod--open")
                window.location.reload();
            })
    }


    return (
        <>
            <div className="reyting-mod" ref={elReytingModal} onClick={(evt) => {
                if (
                    evt.target.matches(".reyting-mod") || evt.target.matches(".reytin-mod__clos")
                ) {
                    elReytingModal.current.classList.remove("reyting-mod--open");
                }
            }}>
                <div className="reyting-mod__wrap">
                    <button className="reytin-mod__clos"></button>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1
                        HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
                        className="reyting-mod__user-avatar">
                    </img>
                    <p className="name">{userData?.name} {userData?.lastname}</p>

                    <div className="reyting-mod__form">
                        <div className="star_widget">
                            <ReactStars {...Rating} />
                        </div>
                        <div className="rateus__text"></div>
                        <textarea className="reyting-mod__textarea" name="comment" onChange={(e) => setComment(e.target.value)} id="comment" cols="30" rows="10"></textarea>
                        <Button type="submit" onClick={(e) => onSubmit(e)} variant="contained" className="reyting-mod__btn">Yuborish</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReytingModal;