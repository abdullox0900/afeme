// Import => React
import React from "react";

// Import => Components
import Loader from "../../Components/Loader/Loader"
import Chat from "../../Components/Chat/Chat"

function Home() {
    
    return (
        <>
            <Loader/>
            <Chat />
        </>
    )
}

export default Home;