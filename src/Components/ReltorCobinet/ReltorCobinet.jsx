// Import => React
import React, { useRef } from "react";
import { useEffect, useState, useContext } from "react";

// Import => React-Router-Dom
import { NavLink as Link, useParams } from "react-router-dom";
import axios from "axios";

// Import => Components
import { Context as LangContext } from '../../Context/LangContext';
import AdvertMap from "../AdvertMap/AdvertMap"
import Container from "../Container/Container";
import ZvezImgIcon from "../../Assets/Img/Icon/zvezda.svg";
import ReytingModal from "../ReytingModal/ReytingModal";

// Import => Style Component
import "../../Components/ReltorCobinet/ReltorCobinet.scss";

// Import => Mue
import { DoNotStepOutlined, Tune } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ReactStars from "react-rating-stars-component";
import StarIcon from "../../Lib/Svg/star";


function ReltorCobinet() {
    const date = useRef(null)
    const { userId } = useParams()
    const [userData, setReltorUserData] = useState([])
    const { lang, setLang } = useContext(LangContext);
    const [userPosts, setUserPosts] = useState([]);
    const [comment, setComment] = useState([])

    // Skeleton useState
    const [isLoading, setLoading] = useState(false);

    let url = process.env.REACT_APP_URL;

    useEffect(() => {
        axios.get(`${url}user/${userId}`)
            .then(res => {
                if (res.data.hasOwnProperty('data')) {
                    let data = res.data.data;
                    setComment(data.fullreyting);
                    setReltorUserData(data);
                    setUserPosts(data.posts);
                    setLoading(true);
                    console.log(userPosts);
                } else {
                    setReltorUserData(null);
                }
            })
            .catch(() => setReltorUserData(null));
    }, [])

    let oldin = new Date(userData?.created_at)
    let hozir = new Date()
    let diff = Math.abs(hozir - oldin);
    let total = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let days = `${total}  kundan beri`
    let month = `${Math.ceil(total / 30)}  oydan beri`
    let year = `${Math.ceil(total / 365)}  yildan beri`

    const elReytingModal = React.useRef();

    const Rating = {
        size: 30,
        count: 5,
        color: "#dee7ee",
        activeColor: "gold",
        value: Math.round(userData.reting),
        a11y: true,
        isHalf: true,
        edit: false,
        emptyIcon: <StarIcon width="40px" height="40px" />,
    }

    console.log(comment);

    function showMap() {
        if (userPosts) {
            if (userPosts.length > 0) {
                console.log(userPosts);
                return <AdvertMap advert={userPosts}/>
            }
        }
    }

    return (
        <>
            <Container>
                <section className="reltorcob">
                    <div className="reltorcob__box" >
                        <div className="reltorcob__wrapper">
                            {
                                isLoading ? <img className="reltorcob__avatar" src={userData.image ? userData.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"} alt="" width={"100px"} /> :
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
                                    isLoading ? <div className="reltorcob__reyting-box" onClick={() => {
                                        elReytingModal.current.classList.add("reyting-mod--open")
                                    }}>
                                        <div className="reltorcob__reyting-title">
                                            {Math.round(userData.reting)}
                                        </div>
                                        <button className="reltorcob__reyting-btn">
                                            <ReactStars {...Rating} />
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
                                            <p className="reltorcob__work-taj">{+userData?.experience} yillik tajriba</p>
                                            <p className="reltorcob__work-afeme" >
                                                {total <= 30 ? days : total <= 365 ? month : year}
                                            </p>
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
                                            {userData?.description}
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
                                        <a href={`mailto: ${userData.email}`} className="reltorcob__cantact-email">{userData.email}</a>
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
                    {isLoading ? (
                        <h2 className="title">Fikr-Mulohazalar</h2>
                    ) : (
                        <Skeleton width={200} height={30} />
                    )
                    }
                    <div className="realtor__comments">
                        {comment?.map((com) => (
                            <div className="comments">
                                <div className="comment_box" key={com.id}>
                                    <div className="first">
                                        {isLoading ? (
                                            <p className="author">{com.author?.name} {com.author?.lastname}</p>
                                        ) : (
                                            <Skeleton width={160} height={20} />
                                        )}
                                        <div className="reting">
                                            {isLoading ? (
                                                <ReactStars {...{
                                                    size: 25,
                                                    count: 5,
                                                    color: "#dee7ee",
                                                    activeColor: "gold",
                                                    value: Math.round(com.reting),
                                                    a11y: true,
                                                    isHalf: true,
                                                    edit: false,
                                                    emptyIcon: <StarIcon />,
                                                }} />
                                            ) : (
                                                <Skeleton width={150} height={30} />
                                            )}
                                        </div>
                                    </div>
                                    {isLoading ? (
                                        <p className="commit"> {com.comment ? com.comment : 'Foydalanuvchi izoh koldirmadi'}</p>
                                    ) : (
                                        <Skeleton />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="realtor__map">
                        {showMap()}
                    </div>
                </section>
            </Container>

            <ReytingModal elReytingModal={elReytingModal} userData={userData} userId={userData.id} />

        </>
    )
};

export default ReltorCobinet;