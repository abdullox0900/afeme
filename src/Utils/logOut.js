import React, { useEffect, useState } from "react"

function LogOut() {
    
    const [token, setToken] = useState(localStorage.getItem("Token") || null);

    useEffect(() => {
        localStorage.removeItem("Token");
        window.location.href = '/Afeme';
    }, []);
}
export default LogOut