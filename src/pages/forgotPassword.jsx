import React, { useState } from 'react'
import '../signIn.css'
import { useLocation, useNavigate } from 'react-router'
import logo from '../logo.png'
import { TbUserCircle } from 'react-icons/tb'
import { RiUser6Line } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import Fb from '../component/fb'
import Google from '../component/Google'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'



export default function ForgotPassword() {
  const navigate = useNavigate()
  const location = useLocation()

  async function onSubmit (e) {
	e.preventDefault()
	try {
		const auth = getAuth
		await sendPasswordResetEmail(auth, email)
	} catch (error) {
		
	}
  }

  const [form, setForm] = useState(
	{
		email: ''
	}
  )

  const {email} = form  

  function onChange (e) {
	setForm((prevState) => ({
		...prevState, [e.target.id]: e.target.value,
	}))
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
				<form className="fm" onSubmit={onSubmit}>
					<div className="shape"></div>

					<div className="user-pen"><TbUserCircle id="user"/></div>
					
					<div className="form-container">
						<div className="input-div">
							<input type="email" name="email" id="email" value={email} placeholder="Enter Email Address" onChange={onChange}/>
							<HiOutlineMail />
						</div>
					</div>
					<div className="dir">
						<p className="log"><a onClick={() => {
              navigate('/sign-in')
            }}>Log-in</a></p>
						<p className="fc"><a onClick={() => {
              navigate('/sign-up')
            }}>Sign-Up</a></p>
					</div>
					<div className="btn-div">
						<button type="submit" id="btn">Reset-Password</button>
						<Fb />
						<Google />
					</div>
					
				</form> 
			</div>
		</div>
	</section>
    </>
  )
}
