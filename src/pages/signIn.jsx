import { useState } from "react"
import { Link } from "react-router-dom"
import '../signIn.css'
import { useLocation, useNavigate } from 'react-router'
import { VscEyeClosed, VscEye } from 'react-icons/vsc'
import { TbUserCircle } from 'react-icons/tb'
import { LuMailCheck } from 'react-icons/lu'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import logo from '../logo.png'
import Google from '../component/Google'
import Fb  from '../component/fb'
import { toast } from "react-toastify"

export default function SignIn() {

// Initializing usenavigate and uselocation 
  const navigate = useNavigate()
  const location = useLocation()

// Setting up the show password and text component 
  const [ShowPassword, setShowPassword] = useState(false)

// Gettin Data From The Form In The Frontend 
  const [FormData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = FormData;

  // Setting Up The Form Changes 

  function onChange(e) {
    setFormData((prevState) => ({
          ...prevState, [e.target.id]: e.target.value,
      
    }));
  }

  // Loging In User In Firebase

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      if(userCredentials.user) {
        toast("Logged In")
        navigate('/profile')
      }
    } catch (error) {
      toast(error)
    }

  }
  return (
    <>
      <section className="sec-2">
      <div className="main">
        <div className="left">
          <div>
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <div>
            <p className="sub">
              <strong>Bulls Investment,</strong> Giving You The Best Investment Arsenal To Upgrade Your Finances, And Live Life The Way You Choose
            </p>
            <div className="button">
              <Link to="/contact" className="mk btn">Make Inquiry</Link >
              <Link to="/signup" className="join btn">Join Us</Link >
            </div>
            
          </div>
        </div>
        <div className="right">
          <form className="fm lgIn" onSubmit={onSubmit}>
            <div className="shape"></div>

            <div className="user-pen"><TbUserCircle id="user"/></div>
            
            <div className="form-container">
              
              <div className="input-div">
                <input type="email" placeholder="Enter Email Address" id="email" value={email} onChange={onChange}/>
                <LuMailCheck className="ic"/>
              </div>
              <div className="input-div">
                <input type={ShowPassword ? 'text' : 'password'} placeholder="Password" id="password" value={password} onChange={onChange}/>
                {ShowPassword ? <VscEye id="eye" className='ic' onClick={() => {
                  setShowPassword((prevState) => !prevState) }}/> : <VscEyeClosed id='eye' className='ic' onClick={() =>  {
                  setShowPassword((prevState) => !prevState)
                }} />}
              </div>
            </div>
            <div className="dir">
              <p className="log">Don't Have Account? <a onClick={() => {
                navigate('/sign-up')
              }}>Register</a></p>
              <p className="fc"><a onClick={() => {
                navigate('/forgot-password')
              }}>Forgot-Password?</a></p>
            </div>
            <div className="btn-div">
              <button className="btn" id="btn">Log-in</button>
              <Google />
              <Fb />
            </div>
            
          </form> 
        </div>
      </div>
    </section>
  </>
  )
}
