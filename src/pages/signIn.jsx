import { useState } from "react"
import '../signIn.css'
import { useLocation, useNavigate } from 'react-router'
import { VscEyeClosed, VscEye } from 'react-icons/vsc'
import { TbUserCircle } from 'react-icons/tb'
import { LuMailCheck } from 'react-icons/lu'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import logo from '../logo.png'
import Google from '../component/Google'
import Fb  from '../component/fb'

export default function SignIn() {
  const navigate = useNavigate()
  const location = useLocation()
  const [ShowPassword, setShowPassword] = useState(false)

  const [FormData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = FormData;

  function onChange(e) {
    setFormData((prevState) => ({
          ...prevState, [e.target.id]: e.target.value,
      
    }));
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      if(userCredentials.user) {
        navigate('/profile')
      }
    } catch (error) {
      
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
              <button className="mk">Make Inquiry</button>
              <button className="join">Join Us</button>
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
                  setShowPassword((prevState => !prevState))
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
              <button id="btn">Log-in</button>
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
