// Import => React
import React from "react";

// Import => Components
import "../../Components/Pogination/Pogination.scss";

function Pogination() {
    return (
        <>
            <div className="pagination">
                <ul className="pagination-3">
                    <li className="page-number prev"><a href="#">«</a></li>
                    <li className="page-number"><a href="#">1</a></li>
                    <li className="page-number active"><a href="#">2</a></li>
                    <li className="page-number"><a href="#">3</a></li>
                    <li className="page-number"><a href="#">4</a></li>
                    <li className="page-number"><a href="#">5</a></li>
                    <li className="page-number"><a href="#">6</a></li>
                    <li className="page-number"><a href="#">7</a></li>
                    <li className="page-number"><a href="#">8</a></li>
                    <li className="page-number"><a href="#">9</a></li>
                    <li className="page-number"><a href="#">10</a></li>
                    <li className="page-number prev"><a href="#">»</a></li>
                </ul>
            </div>

        </>
    )
};

export default Pogination;