import React from "react"
import { Link } from "react-router-dom"

const register = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            Name <input type="text" /> <br />
            Email <input type="text" /> <br />
            Password <input type="password" /> <br />
            Confirm Password <input type="password" /> <br />
            <button>Register</button>
        </div>
    )
}

export default register