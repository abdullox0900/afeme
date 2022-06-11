import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader"
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import { FullCard } from "../../Components/Card/Card";
import AfemePhone from "../../Components/AfemePhone/AfemePhone";
import Footer from "../../Components/Footer/Footer"
import "./Adverts.scss";
import CardImg1 from "../../Assets/Img/card_img1.jpg";
import CardImg2 from "../../Assets/Img/card_img2.jpg";
import CardImg3 from "../../Assets/Img/card_img3.jpg";
import CardImg4 from "../../Assets/Img/card_img4.jpg";

function Adverts() {

    const [searchParams, setSearchParams] = useSearchParams();
    let htype = searchParams.get("htype");
    console.log(htype);

    const [data, setData] = useState(null)
    const URL = 'https://ali98.uz/api/post';
    useEffect(() => {
        function getData() {
            const result = axios.get(URL)
            .then((response) => {
                let dataStatus = response.data
                if (dataStatus.status == true || dataStatus.status == 200) {
                    let newData = [];
                    newData.push(dataStatus.data);
                    setData(newData[0]);
                    console.log(newData);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
        getData();
    }, [])

    const cardData = {
        housePrice: 1400,
        houseType: 'uy',
        houseTitle: 'My house',
        houseAddress: 'Andijan',
        houseImg: CardImg1,
        houseUrl: '/advert',
        description: "Shinam uy Hovli va joy. Suv Gaz Elektr energiyasi mavjud. Uy 6 xonali bo'lib barcha kerakli sharoitlarga ega. Xonalar: Oshxona Yotoqxona, Mehmonxona Vanna Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem! sit amet consectetur adipisicing elit. Doloribus, exercitationem!..."
    };
    return (
        <>
            <Loader/>
            <Header />
            <Hero />
            <div className="adverts">
                <Container>
                    {data?.slice(0, 3)?.map((row) => {
                        return (
                            <FullCard cardData={cardData} data={row} />
                        )
                    })}
                    <FullCard cardData={cardData} data={data} />
                    <AfemePhone />
                    <FullCard cardData={cardData} data={data} />
                    <FullCard cardData={cardData} data={data} />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Adverts