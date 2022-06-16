// Import => React
import React from "react";
import { useEffect, useState } from "react";

// Import => React-Router-Dom
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

// Import => Axios
import axios  from "axios";

// Import => Components
import Container from "../Container/Container";

// Import => Style Component
import "../../Components/ReltorCobinet/ReltorCobinet.scss";

function ReltorCobinet() {

    const { userId } = useParams()
    const [reltorData, setReltorsData] = useState([])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/user${userId}`).then(res => {
            const persons = res.data.data;
            setReltorsData(persons)
            console.log(persons)
        })
    }, [])

    return (
        <>
            <Container>

                <section className="reltorcob">
                    <NavLink to={"/catalogreltor"} className="reltorcob__btn-all">
                        Barchasini ko’rish
                    </NavLink>

                    <div className="reltorcob__box" >
                        <img className="reltorcob__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="" width={"100px"} />

                        <h3 className="reltorcob__title-name">Abdusalomov Abdullox</h3>
                    </div>
                </section>
            </Container>
        </>
    )
};

export default ReltorCobinet;