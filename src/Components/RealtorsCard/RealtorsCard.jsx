import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "../RealtorsCard/RealtorsCard.scss";
import ZvezImgIcon from "../../Assets/Img/Icon/zvezda.svg"

import RealtorAvatar from "../../Assets/Img/prifile-avar.png";
import RealtorAvatar2 from "../../Assets/Img/prifile-photo2.png";
import RealtorAvatar3 from "../../Assets/Img/prifile-photo3.png"
import RealtorAvatar4 from "../../Assets/Img/prifile-photo4.png"
import RealtorAvatar5 from "../../Assets/Img/prifile-photo5.png"

function RealtorsCard() {

    const [reltorData, setReltorsData] = useState([])

    useEffect(() => {
        axios.get('https://ali98.uz/api/reltors').then(res => {
            const persons = res.data.data;
            setReltorsData(persons)
        })
    }, [])

    return (
        <>
            <div className="realtor-container">
                {
                    reltorData.map((reltor) => {
                        return (
                            <div className="realtor-card" key={reltor.id}>
                                <img className="realtor-card__avatar" src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" width={"100px"} />

                                <div className="realtor-card__wrap">
                                    <h3 className="realtor-card__title">{reltor.name} {reltor.lastname}</h3>
                                    <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                                </div>

                                <div className="realtor-card__reyting">
                                    <img src={ZvezImgIcon} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RealtorsCard;