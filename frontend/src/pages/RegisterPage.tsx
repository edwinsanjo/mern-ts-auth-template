import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTitle } from "../utils/changeTitle";
import { ToastContainer, toast } from 'react-toastify';

export const RegisterPage = () => {
    useTitle("SignUp")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitEvent = () => {
    }
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="flex-col gap-64">
                <div>
                    <h1>SignUp</h1>

                    <input
                        className="text-black"
                        placeholder="Name" type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    <input
                        className="text-black"
                        placeholder="Email" type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <input
                        className="text-black"
                        placeholder="Password" type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />

                    <button onChange={() => submitEvent()}>SignUp</button>
                </div>
            </div>
        </div>
    )
}