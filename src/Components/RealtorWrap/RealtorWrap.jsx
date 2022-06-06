// IMPORT COMPONENTS
import RealtorsCard from "../RealtorsCard/RealtorsCard";
import Container from "../Container/Container"
import Pogination from "../Pogination/Pogination";

// IMPORT IMG
import "../RealtorWrap/RealtorWrap.scss";

function RealtorWrap() {
    return (
        <>
            <Container>
                <div className="realtor-wrap">
                    <h2 className="realtor-wrap__title">Rieltorlar katalogi</h2>
                    <div className="realtor-wrap__box">
                        <p className="realtor-wrap__dos"><span className="realtor-wrap__number">5529</span> ta rieltor topildi</p>
                        <button className="realtor-wrap__btn">Sartirovka kilish</button>
                    </div>
                    <RealtorsCard />
                    <Pogination />
                </div>
            </Container>
        </>
    )
};

export default RealtorWrap;