import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useTitle } from "../utils/changeTitle";
import { authContext } from "../context/authContext";

export const Logout = () => {
    useTitle("Page Not Found | 404")
    const { user, setUser }: any = React.useContext(authContext)
    setUser({
        isLoggedIn: false,
        token: "",
        user: {}
    })
    localStorage.removeItem("token")
    let navigate = useNavigate();
    navigate("/")
    return (
        <div>

        </div>
    )
}