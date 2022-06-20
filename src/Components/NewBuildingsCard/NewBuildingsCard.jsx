// Import => React
import React, { useEffect, useState } from "react";

// Import => Style Component
import "../../Components/NewBuildingsCard/NewBuildingsCard.scss";

// Import => Componnets Img

// Import => Axios
import axios from "axios";

function NewBuildingsCard() {

    const [regionData, setRegionData] = useState([]);

    useEffect(() => {
        axios.get(`https://ali98.uz/api/regions`)
            .then(res => {
                const resdata = res.data.data;
                setRegionData(resdata)
            })
    }, [])

    console.log(regionData)

    return (
        <>
            <div className="new-buildin-wrap-card">
                {
                    regionData.map((reg) => {
                        return (
                            <div className="new-buildin-card">
                                <img className="new-buildin-card__img" src={reg.image} alt="" />

                                <div className="new-buildin-card__body">
                                    <h4 className="new-buildin-card__title">{reg.name_uz}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NewBuildingsCard;