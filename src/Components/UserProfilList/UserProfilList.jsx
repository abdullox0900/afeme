// Import => React
import React from "react";

// Import => Component
import Container from "../../Components/Container/Container";

// Import => Style Component
import "../../Components/UserProfilList/UserProfilList.scss";

function UserProfilList() {
    return (
        <>
                <div className="user-prof">
                    <div className="user-prof__avatar">
                        <img className="user-prof__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="user-avatar" />
                        <h3 className="user-prof__title">Abdullox Abdusalomov</h3>
                    </div>
                    <ul className="user-prof__list">
                        <li className="user-prof__item"></li>
                    </ul>
                </div>
        </>
    )
}

export default UserProfilList;