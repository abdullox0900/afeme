// Import => React and Hooks
import React, {useState, useEffect} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Import => Axios
import axios from "axios";

// Import => Components
import Loader from "../../Components/Loader/Loader";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import { FullCard } from "../../Components/Card/Card";
import AfemePhone from "../../Components/AfemePhone/AfemePhone";
import Footer from "../../Components/Footer/Footer";
import CardImg1 from "../../Assets/Img/card_img1.jpg";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import CardImg3 from "../../Assets/Img/card_img3.jpg";
import CardImg4 from "../../Assets/Img/card_img4.jpg";

// Import => Style
import "./Adverts.scss";

function Adverts() {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    let htype = searchParams.get("htype");

    const [data, setData] = useState([])
    const URL = 'https://ali98.uz/api/post';
    useEffect(() => {
        const result = axios.get(URL, {htype_id: htype})
        .then((response) => {
            let dataStatus = response.status
            if (dataStatus == true || dataStatus == 200) {
                setData(response.data.data);
                console.log(data);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    function showCards() {
        console.log(data);

        if (data.length > 0) {
            data?.map((row) => {
                return (
                    <FullCard data={row} />
                )
            })
        }
    }

    return (
        <>
            <Loader/>
            <Header />
            <Hero />
            <div className="adverts">
                <Container>
                    {showCards()}
                    <AfemePhone />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Adverts