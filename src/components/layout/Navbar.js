import React from 'react'
import './Navbar.css'
import { FaImdb } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

function Navbar() {
    return (
        <div>
            <nav className="nav--container">
                <div className="nav--content">
                    <div className="nav--logo-text">Movie Series Info</div>
                    <div className="movieappsign">
                        <FaImdb color='#EDBF17' />
                        <span></span>
                        <FaReact color='#52B3CD' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar