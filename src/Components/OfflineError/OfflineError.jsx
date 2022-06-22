import React, { useContext } from "react";

// Import => Components
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
import OfflineIcon from "../../Lib/Svg/offline";

function OfflineError() {

    const { lang, setLang } = useContext(Context);
    return (
        <div className="apiEror">
            <OfflineIcon width={250} height={180} />
            <p className="apiEror__text">{content[lang].internetError}</p>
        </div>
    )
};
export default OfflineError