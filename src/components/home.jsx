import React from "react";
import { Link } from "react-router-dom"


const home = () => {
    return (
        <div>
            <h1>Welcome To Landing Page</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}

export default home
