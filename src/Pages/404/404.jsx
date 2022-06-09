import React from "react";
import notfound from "../../Assets/Img/404.svg"
import "./404.scss";

function Page404() {
    return (
        <div className="page404">
            <h1 className="title404">Sahifa topilmadi</h1>
            <img src={notfound} alt="404 image" />
            <p className="text404">Kechirasiz bunday sahifa topilmadi. <a href="/">Shu linkni</a> bosib Bosh sahifaga qaytishingiz mumkin</p>
        </div>
    )
}
export default Page404