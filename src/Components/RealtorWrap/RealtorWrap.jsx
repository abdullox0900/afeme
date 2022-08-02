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
import "../RealtorsCard/RealtorsCard.scss"

// Import useContext => Localization
import { useContext } from "react";
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";
import { v4 } from "uuid";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const elLoadingArrey = [1, 2, 3, 4, 5, 6];

let url = process.env.REACT_APP_URL;

function RealtorWrap() {

    const [sort, setSort] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [reltorData, setReltorsData] = useState([]);
    const { lang, setLang } = useContext(Context);
    const [items, setItems] = useState(reltorData);
    const defaultAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU";

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios.get(`${url}reltors`).then((res) => {
                const persons = res.data.data;
                setReltorsData(persons);
                setLoading(false);
            });
        }, 5000);
    }, []);

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
            setItems(reltorData);
        }
    }, [sort]);

    useEffect(() => {
        axios.get(`${url}reltors`).then((res) => {
            const persons = res.data.data;
            setReltorsData(persons);
            setItems(persons);
        });
    }, []);

    return (
        <>
            <Container>
                <div className="realtor-wrap">
                    <h2 className="realtor-wrap__title">
                        {content[lang].reltor_title}
                    </h2>

                    <div className="realtor-wrap__box">
                        <p className="realtor-wrap__dos"><span className="realtor-wrap__number">{reltorData.length}</span> {content[lang].reltor_lenght}</p>
                        <FormControl className="type">
                            <Select
                                id="demo-simple-select"
                                sx={{ width: '100px', height: '30px' }}
                                defaultValue={'all'}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <MenuItem value={'all'}>All</MenuItem>
                                <MenuItem value={'name'}>A-Z</MenuItem>
                                <MenuItem value={'number'}>1-5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {/* <RealtorsCard /> */}
                    <div className="realtor-wrap__container">
                        {isLoading
                            ? elLoadingArrey.map((lod) => {
                                return (
                                    <ContentLoader
                                        key={v4()}
                                        speed={2}
                                        width={300}
                                        height={378}
                                        viewBox="0 0 300 378"
                                        backgroundColor="#e0e0e0"
                                        foregroundColor="#ecebeb"
                                    >
                                        <circle cx="150" cy="75" r="70" />
                                        <rect
                                            x="35"
                                            y="170"
                                            rx="3"
                                            ry="3"
                                            width="230"
                                            height="25"
                                        />
                                        <rect
                                            x="35"
                                            y="210"
                                            rx="3"
                                            ry="3"
                                            width="230"
                                            height="15"
                                        />
                                        <rect
                                            x="85"
                                            y="240"
                                            rx="3"
                                            ry="3"
                                            width="130"
                                            height="25"
                                        />
                                    </ContentLoader>
                                );
                            })
                            : 
                            items.map((reltor) => {
                                return (
                                    <div key={reltor.id}>
                                        <NavLink
                                            to={`/reltorcob/${reltor.id}`}
                                        >
                                            <div className="realtor-card">
                                                <div className="avatar">
                                                    <img
                                                        className="realtor-card__avatar"
                                                        src={
                                                            reltor.image
                                                                ? reltor.image
                                                                : defaultAvatar
                                                        }
                                                        alt="reltor-img"
                                                        width={"150px"}
                                                        onError={(e) =>
                                                        (e.target.src =
                                                            defaultAvatar)
                                                        }
                                                    />
                                                </div>
                                                <div className="realtor-card__wrap">
                                                    <div className="name">
                                                        <h3 className="realtor-card__title">
                                                            {reltor.name}{" "}
                                                            {reltor.lastname}
                                                        </h3>
                                                        <p className="realtor-card__desc">
                                                            Agent hujjatlari
                                                            tekshirilgan
                                                        </p>
                                                    </div>
                                                    <div className="ratreg">
                                                        <div className="rating">
                                                            <ReactStars
                                                                {...{
                                                                    size: 30,
                                                                    count: 5,
                                                                    color: "#dee7ee",
                                                                    activeColor:
                                                                        "gold",
                                                                    value: Math.round(
                                                                        reltor.reting
                                                                    ),
                                                                    a11y: true,
                                                                    isHalf: true,
                                                                    edit: false,
                                                                    emptyIcon: (
                                                                        <StarIcon
                                                                            width="40px"
                                                                            height="40px"
                                                                        />
                                                                    ),
                                                                }} />
                                                        </div>
                                                        <p className="region">{reltor?.region_id?.name_en} vil.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default RealtorWrap;
