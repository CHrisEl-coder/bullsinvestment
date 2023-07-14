import React from 'react'
import '../signIn.css'
import { useLocation, useNavigate } from 'react-router'
import logo from '../logo.png'
import { TbUserCircle } from 'react-icons/tb'
import { RiUser6Line } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import Fb from '../component/fb'
import Google from '../component/Google'



export default function ForgotPassword() {
  const navigate = useNavigate()
  const location = useLocation()
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
				<form className="fm">
					<div className="shape"></div>

					<div className="user-pen"><TbUserCircle id="user"/></div>
					
					<div className="form-container">
						<div className="input-div">
							<input type="email" placeholder="Enter Email Address" />
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
