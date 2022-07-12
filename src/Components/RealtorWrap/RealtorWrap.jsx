// Import => React
import React from "react";
import { useEffect, useState } from "react";

// Import => Axios
import axios from "axios";
import ContentLoader from "react-content-loader";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import StarIcon from "../../Lib/Svg/star";

// Import => Components
import RealtorsCard from "../RealtorsCard/RealtorsCard";
import Container from "../Container/Container";
import "../RealtorWrap/RealtorWrap.scss";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';
import content from '../../Localization/Content';
import { v4 } from "uuid";
import { logDOM } from "@testing-library/react";

const elLoadingArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function RealtorWrap() {
    const [sort, setSort] = useState('')
    const [isLoading, setLoading] = useState(false);
    const [reltorData, setReltorsData] = useState([])
    const { lang, setLang } = useContext(Context);
    const [items, setItems] = useState(reltorData);
    useEffect(() => {
        setLoading(true)
        axios.get('https://ali98.uz/api/reltors')
            .then(res => {
                const persons = res.data.data;
                setReltorsData(persons)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get('https://ali98.uz/api/reltors')
                .then(res => {
                    const persons = res.data.data;
                    setReltorsData(persons)
                    setLoading(false)
                })
        }, 5000)
    }, [])


    useEffect(() => {
        if (sort === "name") {
            reltorData.sort(function (a, b) {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setItems(reltorData);
        } else if (sort === "number") {
            reltorData.sort(function (a, b) {
                const nameA = a.reting; // ignore upper and lowercase
                const nameB = b.reting; // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setItems(reltorData)
        }
    }, [sort]);

    useEffect(() => {
        axios.get('https://ali98.uz/api/reltors')
            .then(res => {
                const persons = res.data.data;
                setReltorsData(persons)
                setItems(persons)
            })
    }, [])

    return (
        <>
            <Container>

                <div className="realtor-wrap">

                    <h2 className="realtor-wrap__title">{content[lang].reltor_title}</h2>

                    <div className="realtor-wrap__box">
                        <p className="realtor-wrap__dos"><span className="realtor-wrap__number">{reltorData.length}</span> {content[lang].reltor_lenght}</p>
                        {/* <button className="realtor-wrap__btn" onClick={Sort}>{content[lang].reltor_sort}</button> */}

                        <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
                            <option value="">all</option>
                            <option value="name">A-Z</option>
                            <option value="number">1-5</option>
                        </select>
                    </div>
                    {/* <RealtorsCard /> */}
                    <div className="realtor-container">
                        {
                            isLoading ? (

                                elLoadingArrey.map((lod) => {
                                    return (
                                        <ContentLoader
                                            key={v4()}
                                            speed={2}
                                            width={800}
                                            height={200}
                                            viewBox="0 0 800 200"
                                            backgroundColor="#e0e0e0"
                                            foregroundColor="#ecebeb">
                                            <rect x="214" y="110" rx="3" ry="3" width="150" height="15" />
                                            <circle cx="127" cy="99" r="53" />
                                            <rect x="211" y="65" rx="0" ry="0" width="300" height="20" />
                                            <rect x="609" y="67" rx="0" ry="0" width="130" height="20" />
                                        </ContentLoader>
                                    )
                                })
                            ) : (
                                items.map((reltor) => {
                                    return (
                                        <ul key={reltor.id}>
                                            <NavLink to={`/reltorcob/${reltor.id}`}>
                                                <li className="realtor-card">
                                                    <img className="realtor-card__avatar" src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="reltor-img" width={"100px"} />
                                                    <div className="realtor-card__wrap">
                                                        <h3 className="realtor-card__title">{reltor.name} {reltor.lastname}</h3>
                                                        <p className="realtor-card__desc">Agent hujjatlari tekshirilgan</p>
                                                    </div>
                                                    <div className="realtor-card__reyting">
                                                        <ReactStars {...{
                                                            size: 30,
                                                            count: 5,
                                                            color: "#dee7ee",
                                                            activeColor: "gold",
                                                            value: Math.round(reltor.reting),
                                                            a11y: true,
                                                            isHalf: true,
                                                            edit: false,
                                                            emptyIcon: <StarIcon width="40px" height="40px" />,
                                                        }} />
                                                    </div>
                                                </li>
                                            </NavLink>
                                        </ul>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}


export default RealtorWrap;