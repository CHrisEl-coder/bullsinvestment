import { useState } from 'react'
import { db } from '../firebase'
import {
	getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification
} from 'firebase/auth'
import {
	setDoc, doc, serverTimestamp
} from 'firebase/firestore'
import '../signIn.css'
import { useLocation, useNavigate } from 'react-router'
import { VscEyeClosed, VscEye } from 'react-icons/vsc'
import { TbUserCircle } from 'react-icons/tb'
import { RiUser6Line } from 'react-icons/ri'
import { LuMailCheck } from 'react-icons/lu'
import logo from '../logo.png'
import Google from '../component/Google'
import Fb from '../component/fb'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function SignUp() {
	const navigate = useNavigate()
	const location = useLocation()

// Setting Up UserData For Firebase
	
	const [SignData, setSignData] = useState({
		name: '',
		email: '',
		password: ''
	})

	const {name, email, password} = SignData;


// Function For Typing Into The Form Data

	function onChange(e) {
    setSignData((prevState) => ({
        ...prevState, [e.target.id]: e.target.value,
    }));
   };

   const [ShowPassword, setShowPassword] = useState(false)

   // Signing User Up With Firebase And Verifying The User

   function onSubmit (e) {
	const auth = getAuth()

	e.preventDefault()

	createUserWithEmailAndPassword(auth, email, password)
	  .then(() => {

		// Updating User Name 

		updateProfile(auth.currentUser, {
			displayName: name,
		})

		sendEmailVerification(auth.currentUser) 
		   .then(() => {
			const userInfo = {...SignData}
			userInfo.timeStamp = serverTimestamp()
			userInfo.Capital = 0
			userInfo.Earning = 0
			userInfo.Transaction = 0
			userInfo.Withtdrawal = 0
			userInfo.Pending = 0

			setDoc(doc(db, 'BullsInvestment', auth.currentUser.uid), userInfo)
			toast("SucessFull")
			navigate("/profile")

		   })

		   .catch((err) => {
			toast(err)
		   });

		
	  })

	  .catch((err) => {
		toast("Sign-Up Unsucessful")

	  })
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
					   <Link to="/contact" className="mk btn">Make Inquiry</Link>
					   <Link to="/sign-up" className="join btn">Join Us</Link>
					</div>
					
				</div>
			</div>
			<div className="right">
				<form className="fm sgnIn" onSubmit={onSubmit}>
					<div className="shape"></div>

					<div className="user-pen"><TbUserCircle id="user"/></div>
					
					<div className="form-container">
						
						<div className="input-div">
							<input type="text" placeholder="Enter Full Name" id='name' value={name} onChange={onChange}/>
							<RiUser6Line />
						</div>
						<div className="input-div">
							<input type="email" placeholder="Enter Email Address" id='email' value={email} onChange={onChange}/>
							<LuMailCheck />
						</div>
						<div className="input-div">
							<input type={ShowPassword ? 'text' : 'password'} placeholder="Password" id="password" value={password} onChange={onChange}/>
							{ShowPassword ? <VscEye id="eye" onClick={() => {
								setShowPassword((prevState) => !prevState)}} /> : <VscEyeClosed id='eye' onClick={() => {
									setShowPassword((prevState) => !prevState)
								}} />}
						</div>
					</div>
					<div className="dir">
						<p className="log"><a onClick={() => {navigate('/sign-in')}}>Log-in</a></p>
						<p className="fc"><a onClick={() => {navigate('/forgot-password')}}>Forgot-Password</a></p>
					</div>
					<div className="btn-div">
						<button type="submit" className='btn' id="btn">Sign-Up</button>
						<Google />
						<Fb />
					</div>
					
				</form> 
			</div>
		</div>
	</section></>
  )
}
