// Import => React
import React, { useRef } from "react";
import { useEffect, useState, useContext } from "react";

// Import => React-Router-Dom
import { NavLink, useParams } from "react-router-dom";

// Import => Axios
import axios from "axios";

// Import => Components
import { Context as LangContext } from '../../Context/LangContext';
import Container from "../Container/Container";
import ZvezImgIcon from "../../Assets/Img/Icon/zvezda.svg";
import ReytingModal from "../ReytingModal/ReytingModal";

// Import => Style Component
import "../../Components/ReltorCobinet/ReltorCobinet.scss";

// Import => Mue
import { DoNotStepOutlined, Tune } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function ReltorCobinet() {

    const { userId } = useParams()
    const [userData, setReltorUserData] = useState([])
    const { lang, setLang } = useContext(LangContext);
    const [userLocData, setReltorUserLocData] = useState({})
    const [userLocationData, setUserLocationData] = useState({});

    // Skeleton useState
    const [isLoading, setLoading] = useState(false);


    // Pogination useState
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage] = useState(10);
    // const [totalPost, setTotalPost] = useState(0);

    useEffect(() => {
        axios.get(`https://ali98.uz/api/user/${userId}`)
            .then(res => {
                const resdat = res.data.data;
                setReltorUserData(resdat);
                setLoading(true)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ali98.uz/api/user/${userId}`)
            .then(res => {
                let resData = res.data.data.region_id
                setReltorUserLocData(resData)
            })
    }, [])

    useEffect(() => {
        if (lang == 'uz') {
            setUserLocationData(userLocData.name_uz)
        } else if (lang == 'ru') {
            setUserLocationData(userLocData.name_ru)
        } else {
            setUserLocationData(userLocData.name_en)
        }
    }, [lang])

    const elReytingModal = React.useRef();

    return (
        <>

            <section className="reltorcob">

                <Container>
                    <NavLink to={"/catalogreltor"} className="reltorcob__btn-all">
                        Barchasini ko’rish
                    </NavLink>
                    <div className="reltorcob__box" >

                        <div className="reltorcob__wrapper">
                            {
                                isLoading ? <img className="reltorcob__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="" width={"100px"} /> :
                                    <Skeleton variant="circular" width={150} height={150}>
                                        <Avatar />
                                    </Skeleton>
                            }

                            <div className="reltorcob__reytin">
                                {
                                    isLoading ? <h3 className="reltorcob__title-name">{userData.name} {userData.lastname}</h3> :
                                        <Skeleton
                                            width={250}
                                            height={40} />
                                }
                                {
                                    isLoading ? <div className="reltorcob__reyting-box">
                                        <div className="reltorcob__reyting-title">
                                            4.5
                                        </div>
                                        <button className="reltorcob__reyting-btn" onClick={() => {
                                            elReytingModal.current.classList.add("reyting-mod--open")
                                        }}>
                                            <img src={ZvezImgIcon} alt="" />
                                        </button>
                                    </div> : <Skeleton
                                        width={180}
                                        height={40} />
                                }

                            </div>
                        </div>
                        <div className="reltorcob__wrap">
                            <div className="reltorcob__work">
                                {
                                    isLoading ? (
                                        <div className="reltorcob__work-title">Ish Tajribasi</div>
                                    ) : (
                                        <Skeleton
                                            width={100}
                                            height={30}
                                        />
                                    )
                                }

                                {
                                    isLoading ? (
                                        <div className="reltorcob__work-box">
                                            <p className="reltorcob__work-taj">2008 yildan beri</p>
                                            <p className="reltorcob__work-afeme">2 oydan beri</p>
                                        </div>
                                    ) : (
                                        <Skeleton
                                            width={150}
                                            height={60}
                                        />
                                    )
                                }
                            </div>
                            <div className="reltorcob__idesc-box">
                                {
                                    isLoading ? (
                                        <div className="reltorcob__idesc-title">O'zim haqimda</div>
                                    ) : (
                                        <Skeleton
                                            width={120}
                                            height={30}
                                        />
                                    )
                                }

                                {
                                    isLoading ? (
                                        <p className="reltorcob__idescrip">
                                            2008-yildan buyon ko‘chmas mulk sohasida faoliyat yuritaman, ishim davomida yuridik bilim oldim. Mening uchta oliy ma'lumotim bor. Men yakka tartibdagi tadbirkorman. Mening ishim tamoyillari - individual yondashuv, uzoq muddatli hamkorlik, o'zaro ...
                                        </p>
                                    ) : (
                                        <Skeleton
                                            width={380}
                                            height={100}
                                        />
                                    )
                                }
                            </div>
                            <div className="reltorcob__location-info">
                                {
                                    isLoading ? (
                                        <div className="reltorcob__location-title">Ish hududi</div>
                                    ) : (
                                        <Skeleton
                                            width={100}
                                            height={30}
                                        />
                                    )
                                }

                                {
                                    isLoading ? (
                                        <div className="reltorcob__location-region">Andijon </div>
                                    ) : (
                                        <Skeleton
                                            width={150}
                                            height={30}
                                        />
                                    )
                                }
                            </div>
                            <div className="reltorcob__contact-box">
                                {
                                    isLoading ? (
                                        <div className="reltorcob__contact-title">Kontaktlar</div>
                                    ) : (
                                        <Skeleton
                                            width={150}
                                            height={30}
                                        />
                                    )
                                }
                                {
                                    isLoading ? (
                                        <a href="tel:{userData.phone}" className="reltorcob__cantact-tel">{userData.phone}</a>
                                    ) : (
                                        <Skeleton
                                            width={230}
                                            height={30}
                                        />
                                    )
                                }
                                {
                                    isLoading ? (
                                        <a href={`mailto:${userData.email}`} className="reltorcob__cantact-email">{userData.email}</a>
                                    ) : (
                                        <Skeleton
                                            width={230}
                                            height={30}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <ReytingModal elReytingModal={elReytingModal} userData={userData} userId={userData.id} />

        </>
    )
};

export default ReltorCobinet;