// IMPORT REACT
import React from "react";

import "../../Components/Pogination/Pogination.scss";

function Pogination() {
    return (
        <>
            <div class="pagination">
                <ul class="pagination-3">
                    <li class="page-number prev"><a href="#">&laquo;</a></li>
                    <li class="page-number"><a href="#">1</a></li>
                    <li class="page-number active"><a href="#">2</a></li>
                    <li class="page-number"><a href="#">3</a></li>
                    <li class="page-number"><a href="#">4</a></li>
                    <li class="page-number"><a href="#">5</a></li>
                    <li class="page-number"><a href="#">6</a></li>
                    <li class="page-number"><a href="#">7</a></li>
                    <li class="page-number"><a href="#">8</a></li>
                    <li class="page-number"><a href="#">9</a></li>
                    <li class="page-number"><a href="#">10</a></li>
                    <li class="page-number prev"><a href="#">&raquo;</a></li>
                </ul>
            </div>
        </>
    )
};

export default Pogination;