// Import => React
import React, { useContext, useEffect, useState } from "react";

// Import => Components
import Container from "../../Components/Container/Container";
import UserProfilList from "../UserProfilList/UserProfilList";

import { Context } from "../../Context/LangContext";
import { UserContext } from "../../Context/UserContext";

// Import => Img
import UserIlustration from "../../Assets/Img/userIlutration.svg"

// Import => Style Component
import "../../Components/UserProfil/UserProfil.scss";

function UserProfil() {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [passport, setPassport] = useState('')
    const [region, setRegion] = useState('')
    const [posts, setPosts] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        setName(user.data?.name);
        setLastName(user.data?.lastname);
        setPhone(user.data?.phone);
        setEmail(user.data?.email);
        setPassport(user.data?.passport);
        setRegion(user.data?.region_id.name_uz);
        setPosts(user.data?.posts);
        setType(user.data?.user_type);
    }, [])

    return (
        <>
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="personal">
                        <h1 className="title">Mening Malumotlarim</h1>
                        <div className="inpG">
                            <p>{name ? name : ''}</p>
                            <p>{lastname ? lastname : ''}</p>
                            <p>{phone ? phone : ''}</p>
                            <p>{email ? email : ''}</p>
                            <p>{passport ? passport : ''}</p>
                            <p>{region ? region : ''}</p>
                            <p>{posts ? posts.length : ''}</p>
                            <p>{type ? type : ''}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserProfil;