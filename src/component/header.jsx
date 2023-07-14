import React from 'react'
import logo from '../logo.png'
import { FaBars } from 'react-icons/fa'
import '../head.css'
import { useLocation, useNavigate } from 'react-router'

export default function NavBar () {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <section id="sign-head">
        <div id="header">
            <div id="nav-main">
                <img src={logo} id='logo'/>
                <FaBars className="fa fa-bars"/>
            </div>
            <nav id='nav-bar'>
                <ul>
                    <li><a onClick={() => {
                        navigate('/')
                    }}>Home</a></li>
                    <li className="dwn"><a onClick={() => {
                        navigate('/contact')
                    }}>Contact</a></li>
                    <li className="dwn"><a onClick={() => {
                        navigate('/faq')
                    }}>FAQ</a></li>
                    <li className="dwn"><a onClick={() => {
                        navigate('/about-us')
                    }}>About Us</a></li>
                    <li className="dwn"><a onClick={() => {
                        navigate('/sign-up')
                    }}>Sign-Up</a></li>
                    <li className="dwn"><a onClick={() => {
                        navigate('/sign-in')
                    }}>Login</a></li>
                </ul>
            </nav>
        </div>
    </section>
  )
}
