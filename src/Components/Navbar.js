import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar flex bg-${props.mode} h-16 w-full`}>
            <Link className={`font-black mx-2 my-2 text-${props.mode === 'light' ? 'black' : 'white'}`} to="/">{props.title}</Link>

            <div className="list no-underline mx-3 flex">
                <ul className='flex my-2'>
                    <li className={`mx-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                        <Link to="/TextForm">Home</Link>
                    </li>
                    <li className={`mx-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                        <Link to="/">Blogs</Link>
                    </li>
                    <li className={`mx-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                        <Link to="/About">About</Link>
                    </li>
                    <li className='flex items-center mx-36'>
                        <input className='rounded-md p-1 h-6 text-black' type="text" placeholder='Search Here' />
                        <button className='rounded-md h-6 mx-2 w-16 bg-blue-500 text-white'>Search</button>
                    </li>
                </ul>

                <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'white'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'acha sa title name do issy',
    about: 'boht bura ha about to'
}
