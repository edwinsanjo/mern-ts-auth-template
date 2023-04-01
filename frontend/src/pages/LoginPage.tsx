import { Link } from "react-router-dom";
import React from "react";
import { useTitle } from "../utils/changeTitle";

export const LoginPage = () => {
    useTitle("Login")
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="flex-col gap-64">
                <h1>LOGIn</h1>
            </div>
        </div>
    )
}