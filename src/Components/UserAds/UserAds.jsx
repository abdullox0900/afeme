// Import => React
import Raect from "react";

// Import => Style Component
import "../../Components/UserAds/UserAds.scss";

// Import => Component
import Header from "../../Components/Header/Header";
import UserProfilList from "../UserProfilList/UserProfilList";
import Container from "../../Components/Container/Container";

// Import => Img
import CommercemImg from "../../Assets/Img/e-commerce.svg"

function UserAds() {
    return(
        <>
            <Header />
            <Container>
                <div className="user-wrap-router">
                    <UserProfilList />
                    <div className="user-ads">
                        <img src={CommercemImg} alt="svg-img" />
                        <h3 className="user-ads__title">Hozircha sizda Tanlanganlar yok</h3>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserAds;