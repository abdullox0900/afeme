// Import => React
import React from "react";

// Import => Style Container
import "./Container.scss";

function Container({ children, className }) {
    return <div className={'container ' + className}>{children}</div>
}

export default Container