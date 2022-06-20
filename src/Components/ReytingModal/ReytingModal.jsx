// Import => React
import React from "react";

// Import => Style Component
import "../../Components/ReytingModal/ReytingModal.scss";
import StarIcon from "../../Lib/Svg/star";

function ReytingModal() {
    return (
        <>
            <div className="reyting-mod">
                <div className="reyting-mod__wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" className="reyting-mod__user-avatar"></img>
                    <div className="reyting-mod__title">Alibe Alimov</div>
                    <form action="" className="reyting-mod__form">
                        {/* <div>
                            <div className="rating">
                                <input type="radio" name="rate" id="rate-1" defaultValue={1} required />
                                <label htmlFor="rate-1">1</label>
                                <input type="radio" name="rate" id="rate-2" defaultValue={2} required />
                                <label htmlFor="rate-2">2</label>
                                <input type="radio" name="rate" id="rate-3" defaultValue={3} required />
                                <label htmlFor="rate-3">3</label>
                                <input type="radio" name="rate" id="rate-4" defaultValue={4} required />
                                <label htmlFor="rate-4">4</label>
                                <input type="radio" name="rate" id="rate-5" defaultValue={5} required />
                                <label htmlFor="rate-5">5</label>
                            </div>
                            <button type="submit">Submit</button>
                        </div> */}
                        <div className="star_widget">
                            <input type="radio" name="rate" id="rate_5" />
                            <label htmlFor="rate_5"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>
                            <input type="radio" name="rate" id="rate_4" />
                            <label htmlFor="rate_4"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>
                            <input type="radio" name="rate" id="rate_3" />
                            <label htmlFor="rate_3"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>
                            <input type="radio" name="rate" id="rate_2" />
                            <label htmlFor="rate_2"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>
                            <input type="radio" name="rate" id="rate_1" />
                            <label htmlFor="rate_1"><StarIcon width="40px" height="40px" color="#dee7ee" /></label>
                            <form action="#" className="rateus__form">
                                <div className="rateus__text" />
                                <div className="rateus__button">
                                    <button type="button" className="rateus__btn">Send</button>
                                </div>
                            </form>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ReytingModal;