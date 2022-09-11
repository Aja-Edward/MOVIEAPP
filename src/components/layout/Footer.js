import React from 'react'
import './Footer.css'
import { FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'

export const Footer = () => {
    return (
        <div className='footer--container'>
            <div className="footer--content">
                <div className="footer--info">
                    Developed by:<span>Edward Aja</span>,
                    using <FaReact /> React JS &amp; <SiRedux /> Redux integrated with movie data API
                    <a href="http://www.omdbapi.com"
                        target="blank">
                        OMDB
                    </a>
                </div>
            </div>
        </div>
    )
}
