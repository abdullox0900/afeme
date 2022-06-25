// Import => React
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { NavLink as Redirect } from "react-router-dom";
import { Context as LangContext } from "../../Context/LangContext";
import ContentLoader from "react-content-loader";

// Import => Axios
import axios from "axios";

// Import => Components
import Container from "../Container/Container";
import "../../Assets/scss/colors.scss";
import "../Categories/Categories.scss";

// Import => ComponnetsImg
import HomeIcon from "../../Assets/Img/homeIcon.svg";
import Categories1 from "../../Assets/Img/categories1.svg";
import Categories2 from "../../Assets/Img/categories2.svg";
import Categories3 from "../../Assets/Img/categories3.svg";
import Categories4 from "../../Assets/Img/categories4.svg";

function Categories() {
    const { lang, setLang } = useContext(LangContext);
    const [price, setPrice] = React.useState("");
    const [room, setRoom] = React.useState("");
    const [categoriesData, setCategoriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const priceChange = (event) => {
        setPrice(event.target.value);
    };

    const roomChange = (event) => {
        setRoom(event.target.value);
    };

    // Axios
    useEffect(() => {
        axios
            .get("https://ali98.uz/api/htype")
            .then((res) => {
                const categs = res.data.data;
                console.log(categs);
                setCategoriesData(categs);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    function showCategories(amount) {
        if (isLoading) {
            return Array.apply(null, { length: amount }).map(() => {
                return (
                    <ContentLoader
                        speed={1.25}
                        width={140}
                        height={140}
                        interval={0.25}
                        gradientDirection={"left-rigth"}
                        viewBox="0 0 140 140"
                        backgroundColor="#ebebeb"
                        foregroundColor="#0066ff00"
                    >
                        <rect x="42.5" y="20" rx="65" width="65" height="65" />
                        <rect x="35.5" y="100" rx="8" width="80" height="15" />
                    </ContentLoader>
                );
            });
        } else if (categoriesData && categoriesData?.length > 0) {
            return categoriesData?.map((categ) => {
                return (
                    <Redirect
                        className="categories__items"
                        to={{
                            pathname: "/adverts",
                            search: `?htype=${categ.id}`,
                        }}
                    >
                        <img
                            className="categories__img-icon"
                            src={`https://ali98.uz/public/admin2/categories/${categ.icon}`}
                            alt=""
                        />
                        <h3 className="categories__items-title">
                            {lang == "uz"
                                ? categ.name_uz
                                : lang == "ru"
                                ? categ.name_ru
                                : categ.name_en}
                        </h3>
                    </Redirect>
                );
            });
        }
    }

    return (
        <>
            <div className="categories">
                <Container>
                    <div className="categories__content">
                        {showCategories(5)}
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Categories;
