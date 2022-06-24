import React, { useContext } from "react";

// Import => Components
import "./ApiError.scss";
import { Context } from "../../Context/LangContext";
import ErrorIcon from "../../Lib/Svg/error";
import content from "../../Localization/Content";

function ApiError() {
    const { lang, setLang } = useContext(Context);
    return (
        <div className="apiEror">
            <ErrorIcon width={250} height={180} />
            <p className="apiEror__text">{content[lang].apiError}</p>
        </div>
    );
}
export default ApiError;
