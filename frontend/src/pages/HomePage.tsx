import { Link } from "react-router-dom";
import React from "react";
import { useTitle } from "../utils/changeTitle";
import { authContext } from "../context/authContext";
export const HomePage = () => {
    const { user }: any = React.useContext(authContext);
    console.log("times");


    useTitle("New Title")
    return (
        <div className="h-screen w-screen flex justify-center mt-32">
            <div>
                <h1 className="font-bold text-3xl pb-2">Advanced MERN auth Template</h1>
                <div>
                    <p className="font-mono p-2 bg-gray-100 rounded text-center">IsLoggedIn: {user.isLoggedIn ? "True" : "False"}</p>
                </div>
                {user.isLoggedIn ?
                    <div className="flex justify-center gap-4 mt-10">
                        <Link to="/profile" className="border-8 border-black px-9 sm:px-16 py-3">Profile</Link>
                        <Link to="/logout" className="border-8 border-black px-9 sm:px-16 py-3">LogOut</Link>
                    </div>
                    :
                    <div className="flex justify-center gap-4 mt-10">
                        <Link to="/login" className="border-8 border-black px-9 sm:px-16 py-3">Login</Link>
                        <Link to="/signup" className="border-8 border-black px-9 sm:px-16 py-3">SignUp</Link>
                    </div>
                }
            </div>
        </div>
    )
}