import { Link } from "react-router-dom";
import React from "react";
import { useTitle } from "../utils/changeTitle";

export const HomePage = () => {
    useTitle("New Title")
    return (
        <div className="bg-gray-50 flex items-center justify-center">
            <div className="flex-col gap-36">
                <h1>Welcome page</h1>
                <Link to="/login" className="">Login</Link>
            </div>
        </div>
    )
}