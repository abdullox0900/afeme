import React from "react";

// Import => Components
import OfflineIcon from "../../Lib/Svg/offline";

function OfflineError() {
    return (
        <div className="apiEror">
            <OfflineIcon width={150} height={150} />
            <p className="apiEror__text">Internet bilan aloqa Uzildi. Internet mavjud emas</p>
        </div>
    )
};
export default OfflineError