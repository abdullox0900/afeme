// Import => React
import React from "react";
import { useEffect, useState } from "react";

// Import => React-Router-Dom
import { NavLink } from "react-router-dom";


// Import => Axios
import axios from "axios";

// Import => Components
import "../RealtorsCard/RealtorsCard.scss";
import ZvezImgIcon from "../../Assets/Img/Icon/zvezda.svg"

function RealtorsCard() {

    const [currentPage , setCurrentPage] = useState(1);
    const [reltorPost, setReltorPost] = useState(10);
    const [reltorData, setReltorsData] = useState([]);

    // const users = а

    useEffect(() => {
        axios.get('https://ali98.uz/api/reltors').then(res => {
            const persons = res.data.data;
            setReltorsData(persons)

            console.log(persons)
        })
    }, [])

    return (
        <>
            <div className="realtor-container">
                {
                    reltorData.map((reltor) => {
                        return (
                            <ul>
                                <NavLink to={`/reltorcob/${reltor.id}`}>
                                    <li key={reltor.id} className="realtor-card">

                                        <img className="realtor-card__avatar" src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" width={"100px"} />

                                        <div className="realtor-card__wrap">
                                            <h3 className="realtor-card__title">{reltor.name} {reltor.lastname}</h3>
                                            <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                                        </div>


                                        {/* <div className="realtor-card__reyting">
                                            <img src={ZvezImgIcon} alt="" />
                                        </div>

                                        <div className="realtor-card__region-box">
                                            <div className="reltor-card__region">{reltor.region_id}</div>
                                        </div> */}
                                    </li>
                                </NavLink>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    );
};

export default RealtorsCard;