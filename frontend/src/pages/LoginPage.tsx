import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useTitle } from "../utils/changeTitle";
import { toast } from 'react-toastify';
import axios from 'axios'
import { authContext } from "../context/authContext";

export const LoginPage = () => {
    useTitle("Login")
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser }: any = useContext(authContext)

    const submitHandler = async () => {
        if (!email) return toast.error("Email Not Found")
        if (!password) return toast.error("Password Not Found")

        try {
            await axios.post("/auth/login", {
                email,
                password
            }).then(({ data }) => {
                if (data) {
                    localStorage.setItem("token", data)
                    axios.defaults.headers.common['x-auth-token'] = data;
                    axios.get("/auth/getuserdata").then((data1) => {
                        setUser({
                            isLoggedIn: true,
                            token: data,
                            user: data1.data.user,
                        })
                    }, (err) => {
                        toast.error("Some Error Occured please try again later" + err)
                        // localStorage.removeItem("token")
                        // window.location.reload()
                    })
                    navigate("/")
                } else navigate("/login")
            }, (err) => {
                toast.error(err.response.data.error)
            })
        } catch (error) {
            toast.error("some error occured. please try again later")
            console.log(error);
        }
    }
    return (
        <div>
            <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="flex-row gap-64">
                    <h1>LOGIN</h1>
                    <input className="text-black" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input className="text-black" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button onClick={() => submitHandler()} >Login</button>
                </div>
            </div>
        </div>
    )
}