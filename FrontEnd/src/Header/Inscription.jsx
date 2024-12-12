import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Inscription() {
    return (
        <>
            <Link to="/register">
                <button className="px-4 py-1.5 bg-green-500 hover:bg-green-700 text-white rounded">Sign Up</button>
                {/* <button className="px-4 py-1.5 bg-green-500 hover:bg-green-700 text-white rounded"><FaSignInAlt/></button> */}
            </Link>
        </>
    )
}

export default Inscription
