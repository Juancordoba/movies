import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { userInfo } from 'os'

export default function Navigation() {
    const [user, setUser] = useState("Juan Cordoba")

    return (
        <div className="navigation">
                <b>Movies</b>
                <span id="user" hidden={false}>
                    <FontAwesomeIcon icon={faUser} /> {user}
                    <button>signout</button>
                </span>
                <span id="links" hidden={true}>
                    <Link className="link" to="signin">SignIn</Link>
                    <Link className="link" to="register">Register</Link>
                </span>
        </div>
    )
}
