import React from "react";
import "../RealtorsCard/RealtorsCard.scss";
import ZvezImgIcon from "../../Assets/Img/Icon/zvezda.svg"

import RealtorAvatar from "../../Assets/Img/prifile-avar.png";
import RealtorAvatar2 from "../../Assets/Img/prifile-photo2.png";
import RealtorAvatar3 from "../../Assets/Img/prifile-photo3.png"
import RealtorAvatar4 from "../../Assets/Img/prifile-photo4.png"
import RealtorAvatar5 from "../../Assets/Img/prifile-photo5.png"

function RealtorsCard() {
    return (
        <>
            <div className="realtor-container">
                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullox</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">
                        <img src={ZvezImgIcon} alt="" />
                    </div>
                </div>

                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar2} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Karimov Sherzod</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">
                        <img src={ZvezImgIcon} alt="" />
                    </div>
                </div>

                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar3} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullokh</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">
                        <img src={ZvezImgIcon} alt="" />
                    </div>
                </div>

                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar4} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullokh</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">
                        <img src={ZvezImgIcon} alt="" />
                    </div>
                </div>

                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar5} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullokh</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">
                        <img src={ZvezImgIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RealtorsCard;