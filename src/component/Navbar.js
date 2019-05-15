import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar-component">
            <nav className="nav-extended blue">
                <div className="nav-wrapper container ">
                    <Link to='/' className="brand-logo">REACT REDUX APP</Link>
                    <ul className="right">
                        <li><Link to='url-users'>URL Users</Link></li>
                        <li><Link to='/redux-users'>Redux Users</Link></li>
                        <li><Link to='/'>About</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
