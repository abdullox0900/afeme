import React from "react";
import "../RealtorsCard/RealtorsCard.scss";

import RealtorAvatar from "../../Assets/Img/realtors1.jpg";

function RealtorsCard() {
    return (
        <>
            <div className="realtor-container">
                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullokh</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">

                    </div>
                </div>

                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullokh</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">

                    </div>
                </div>

                <div className="realtor-card">
                    <img className="realtor-card__avatar" src={RealtorAvatar} alt="" />

                    <div className="realtor-card__wrap">
                        <h3 className="realtor-card__title">Abdusalomov Abdullokh</h3>
                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                    </div>

                    <div className="realtor-card__reyting">

                    </div>
                </div>
            </div>
        </>
    )
}

export default RealtorsCard;