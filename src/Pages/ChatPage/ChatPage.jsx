// Import => React
import React from "react";

// Import => Components
import Loader from "../../Components/Loader/Loader"
import Chat from "../../Components/Chat/Chat"
import Partners1 from "../../Assets/Img/partners1.jpg";
import Partners2 from "../../Assets/Img/partners2.jpg";
import Partners3 from "../../Assets/Img/partners3.jpg";
import Partners4 from "../../Assets/Img/partners4.jpg";
import Container from "../../Components/Container/Container";

function Home() {

    const data = {
        images: [Partners1, Partners2, Partners3, Partners4],
    }
    return (
        <>
            <Loader/>
            <Chat />
        </>
    )
}

export default Home;