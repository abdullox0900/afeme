// Import => React
import React from "react";

// Import => Component
import UserMessage from "../../Components/UserMessage/UserMessage";
import Header from "../../Components/Header/Header";
import UserProfilList from "../../Components/UserProfilList/UserProfilList";
import Container from "../../Components/Container/Container";

import "../../Pages/UserMessage/UserMessagePage.scss";

function UserMessagePage() {
    return (
        <>
            <UserMessage />
        </>
    )
}

export default UserMessagePage;