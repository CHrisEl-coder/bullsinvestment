import React from 'react'
import logo from '../logo.png'
import { FaBars } from 'react-icons/fa'
import '../head.css'
import { useNavigate } from 'react-router'

export default function NavBar () {
  const navigate = useNavigate()

  function onClick(e) {
    const element  = document.getElementById("nav-bar")
    element.classList.toggle("show")
  }
  return (
    <section id="sign-head">
        <div id="header">
            <div id="nav-main">
                <img src={logo} alt='logo' id='logo'/>
                <FaBars className="fa-bars" onClick={onClick} id='bars'/>
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
