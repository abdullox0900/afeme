import React from "react";

// Import => Components
import "./ApiError.scss";
import ErrorIcon from "../../Lib/Svg/error";

function ApiError() {
    return (
        <div className="apiEror">
            <ErrorIcon width={150} height={150} />
            <p className="apiEror__text">Ma'lumotlar olishda xatolik yuz berdi</p>
        </div>
    )
};
export default ApiError