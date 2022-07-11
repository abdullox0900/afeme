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
import axios from "axios";

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
        setRegion(user.data?.region_id?.name_uz);
        setPosts(user.data?.posts);
        setType(user.data?.user_type);
    }, [])

    let token = localStorage.getItem('Token')
    let all = new URLSearchParams();
    all.append('name', name)
    all.append('lastname', lastname)
    all.append('phone', phone)
    all.append('email', 'sıdhfıusdhfıo') 
    all.append('passport', passport)
    all.append('region_id', user.data?.region_id?.id)
    all.append('user_type', 'companiya')

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        'Authorization': `Bearer ${token}`

    }
    const Put = (e) => {
        fetch(`https://ali98.uz/api/user/${user.data.id}?paremeter=PUT`, {
            method: "PUT",
            headers: headersList,
            body:all
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            console.log(data);
        })
    }

    return (
        <>
            <Container>
                <div className="user-profil-wrap">
                    <UserProfilList />
                    <div className="personal">
                        <div className="inpG">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} id={name} />
                            <label htmlFor="lastname">LastName</label>
                            <input type="text" value={lastname} id={lastname} />
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" value={phone} id={phone} />
                            <label htmlFor="email">Email</label>
                            <input type="text" value={email} id={email} />
                            <label htmlFor="passport">Passport</label>
                            <input type="text" value={passport} id={passport} />
                            <label htmlFor="region">Region</label>
                            <input type="text" value={region} id={region} />
                            <label htmlFor="posts">Postlar Soni</label>
                            <input type="text" value={posts?.length} id={posts} />
                            <label htmlFor="type">Mijor Turi</label>
                            <input type="text" value={type} id={type} />
                        </div>
                        <button type="submit" onClick={(e) => Put(e)}>Edit</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserProfil;