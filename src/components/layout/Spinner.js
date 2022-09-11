import React from 'react'
import spinner from './spinner.gif'
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <img className="spinner--image"
                src={spinner}
                alt="Loading..."
            />
        </div>
    )
}

export default Spinner