// // Import => React
// import React from "react";
// import { useEffect, useState } from "react";

// // Import => React-Router-Dom
// import { NavLink } from "react-router-dom";

// // Import => Axios
// import axios from "axios";

// // Import => Components
// import "../RealtorsCard/RealtorsCard.scss";
// import ZvezImgIcon from "../../Assets/Img/Icon/zvezda.svg";

// // Import => Skeleton
// import ContentLoader from "react-content-loader";
// import { v4 } from "uuid";

// import ReactStars from "react-rating-stars-component";
// import StarIcon from "../../Lib/Svg/star";

// let url = process.env.REACT_APP_URL;

// function RealtorsCard() {
//     // Pagination useState
//     const [currentPage, setCurrentPage] = useState(1);
//     const [reltorPost, setReltorPost] = useState(10);
//     const [reltorData, setReltorsData] = useState([]);

//     // Skeleton useState
//     const [isLoading, setLoading] = useState(false);
//     const defaultAvatar =
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU";

//     useEffect(() => {
//         setLoading(true);
//         setTimeout(() => {
//             axios.get(`${url}reltors`).then((res) => {
//                 const persons = res.data.data;
//                 setReltorsData(persons);
//                 setLoading(false);
//             });
//         }, 5000);
//     }, []);

//     console.log(reltorData);
//     const elLoadingArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     return (
//         <>
//             <div className="realtor-container">
//                 {isLoading
//                     ? elLoadingArrey.map((lod) => {
//                           return (
//                               <ContentLoader
//                                   key={v4()}
//                                   speed={2}
//                                   width={800}
//                                   height={200}
//                                   viewBox="0 0 800 200"
//                                   backgroundColor="#e0e0e0"
//                                   foregroundColor="#ecebeb"
//                               >
//                                   <rect
//                                       x="214"
//                                       y="110"
//                                       rx="3"
//                                       ry="3"
//                                       width="150"
//                                       height="15"
//                                   />
//                                   <circle cx="127" cy="99" r="53" />
//                                   <rect
//                                       x="211"
//                                       y="65"
//                                       rx="0"
//                                       ry="0"
//                                       width="300"
//                                       height="20"
//                                   />
//                                   <rect
//                                       x="609"
//                                       y="67"
//                                       rx="0"
//                                       ry="0"
//                                       width="130"
//                                       height="20"
//                                   />
//                               </ContentLoader>
//                           );
//                       })
//                     : reltorData.map((reltor) => {
//                           return (
//                               <ul className="reltor-card__list" key={reltor.id}>
//                                   <NavLink to={`/reltorcob/${reltor.id}`}>
//                                       <li className="realtor-card">
//                                           <img
//                                               className="realtor-card__avatar"
//                                               src={
//                                                   reltor.image && reltor.image != 'null'
//                                                       ? reltor.image
//                                                       : defaultAvatar
//                                               }
//                                               alt="reltor-img"
//                                               onError={(e) =>
//                                                   (e.target.src = defaultAvatar)
//                                               }
//                                           />
//                                           <div className="realtor-card__wrap">
//                                               <h3 className="realtor-card__title">
//                                                   {reltor.name}{" "}
//                                                   {reltor.lastname}
//                                               </h3>
//                                               <p className="realtor-card__desc">
//                                                   Agent hujjatlari tekshirilgan
//                                               </p>
//                                           </div>

//                                           <div className="realtor-card__reyting">
//                                               <ReactStars
//                                                   {...{
//                                                       size: 30,
//                                                       count: 5,
//                                                       color: "#dee7ee",
//                                                       activeColor: "gold",
//                                                       value: Math.round(
//                                                           reltor.reting
//                                                       ),
//                                                       a11y: true,
//                                                       isHalf: true,
//                                                       edit: false,
//                                                       emptyIcon: (
//                                                           <StarIcon
//                                                               width="40px"
//                                                               height="40px"
//                                                           />
//                                                       ),
//                                                   }}
//                                               />
//                                           </div>

//                                           <div className="realtor-card__region-box">
//                                               {/* <div className="reltor-card__region">{reltor?.region_id}</div> */}
//                                           </div>
//                                       </li>
//                                   </NavLink>
//                               </ul>
//                           );
//                       })}
//             </div>
//         </>
//     );
// }
// export default RealtorsCard;
