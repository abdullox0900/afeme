import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";

import content from "../../Localization/Content";
import { Context } from "../../Context/LangContext";
import notFoundIcon from "../../Assets/Img/Icon/not-found.svg";
import "./NoResults.scss";

function NoResults() {

    const { lang, setLang } = useContext(Context);
    return (
        <div className="noResults">
            <img src={notFoundIcon} alt="" />
            <div className="noResults__content">
                <h3 className="noResults__title">
                    {content[lang].noResults}
                </h3>
                <ul style={{ padding: 0 }}>
                    <li
                        className="noResults__text"
                        style={{ listStyle: "inside" }}
                    >
                        {content[lang].changeFilterThings}
                    </li>
                    <li
                        className="noResults__text"
                        style={{ listStyle: "inside" }}
                    >
                        {content[lang].cleanFilterThings}
                    </li>
                    <li
                        className="noResults__text"
                        style={{ listStyle: "inside" }}
                    >
                        <Link to={"/map"}>{content[lang].map}</Link> {content[lang].viaWith}
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NoResults;
