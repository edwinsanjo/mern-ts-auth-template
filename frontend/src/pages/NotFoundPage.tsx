import { Link } from "react-router-dom";
import React from "react";
import { useTitle } from "../utils/changeTitle";

export const NotFoundPage = () => {
    useTitle("Page Not Found | 404")
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="flex-col gap-64">
                <h1 className="text-9xl font-semibold">404</h1>
                <p className="text-xl text-center font-bold">Page Not Found</p>
            </div>
        </div>
    )
}