// Import => React
import React from "react";

// Import => Components
import Header from "../../Components/Header/Header";
import ReltorCobinet from "../../Components/ReltorCobinet/ReltorCobinet";
import ReytingModal from "../../Components/ReytingModal/ReytingModal";
import Footer from "../../Components/Footer/Footer"

function ReltorCob() {
    return (
        <>
            <Header />
            <ReltorCobinet />
            <ReytingModal/>
            <Footer/>
        </>
    )
}

export default ReltorCob;