// Import => React
import React from "react";
import { useState } from "react";

// Import => Style Component
import "../../Components/ReytingModal/ReytingModal.scss";
import StarIcon from "../../Lib/Svg/star";

// Import => Mui
import Button from '@mui/material/Button';

// Import => Axios
import axios from "axios";
import { useEffect } from "react";

function ReytingModal({ userId }) {

    console.log(userId)

    const apiUrl = "https://ali98.uz/api/reyting";
    const [postData, setPostData] = useState({
        userId: 169,
        reting: "",
        comment: "",
    })



    function handel(evt) {
        const newData = { ...postData }
        newData[evt.target.id] = evt.target.value
        setPostData(newData)
        console.log(newData)
    }

    function submit(evt) {
        evt.preventDefault();

        axios.post(apiUrl, {
            reltor_id: 170,
            comment: "lkdsnlkfvndflknvdf",
            reting:  5,
        })
    }

    // useEffect(() => {
    //     function submit(evt) {
    //         evt.preventDefault();

    //         axios.post(apiUrl, {
    //             reltor_id: postData.userId,
    //             comment: postData.comment,
    //             reting:  postData.reting,
    //         })
    //     }
    // },[])

    return (
        <>
            <div className="reyting-mod">
                <div className="reyting-mod__wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" className="reyting-mod__user-avatar"></img>
                    <div className="reyting-mod__title">Alibe Alimov</div>
                    <form action="" onSubmit={(evt) => submit(evt)} className="reyting-mod__form">
                        <div className="star_widget">
                            {/* <input onChange={(evt) => handel(evt)} value={postData.userId} name="userData" id="userDataId" /> */}

                            <input onChange={(evt) => handel(evt)} value="5" type="radio" name="rate" id="rate_5" />
                            <label htmlFor="rate_5"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>

                            <input onChange={(evt) => handel(evt)} value="4" type="radio" name="rate" id="rate_4" />
                            <label htmlFor="rate_4"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>

                            <input onChange={(evt) => handel(evt)} value="3" type="radio" name="rate" id="rate_3" />
                            <label htmlFor="rate_3"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>

                            <input onChange={(evt) => handel(evt)} value="2" type="radio" name="rate" id="rate_2" />
                            <label htmlFor="rate_2"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>

                            <input onChange={(evt) => handel(evt)} value="1" type="radio" name="rate" id="rate_1" />
                            <label htmlFor="rate_1"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>

                        </div>

                        <textarea onChange={(evt) => handel(evt)} className="reyting-mod__textarea" value={postData.comment} name="comment" id="comment" cols="30" rows="10"></textarea>
                        <Button type="button" variant="contained" className="reyting-mod__btn">Yuborish</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReytingModal;