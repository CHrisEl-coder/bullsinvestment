import React, { useState, useEffect } from 'react'
import logo from '../logo.png'
import { FaBars } from 'react-icons/fa'
import '../head.css'
import { useNavigate } from 'react-router'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default function NavBar () {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)


  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if(user) {
            setShow(true)
        }else {
            setShow(false)
        }
    });
  }, []);

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
                    {show ? '' 
                    :  <li className="dwn"><a onClick={() => {
                        navigate('/sign-up')
                    }}>Sign-Up</a></li> }

                    {show ? '' 
                    : <li className="dwn"><a onClick={() => {
                        navigate('/sign-in')
                    }}>Login</a></li> }
                    
                    {show ? <li className="dwn"><a onClick={() => {
                        navigate('/profile')
                    }}>Profile</a></li> : ''};
                </ul>
            </nav>
        </div>
    </section>
  )
}
