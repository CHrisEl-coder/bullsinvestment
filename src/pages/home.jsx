import React from 'react'
import { SiBookstack } from 'react-icons/si'
import { BsPiggyBank } from 'react-icons/bs'
import { GiPayMoney } from 'react-icons/gi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { LuShieldCheck } from 'react-icons/lu'
import { TbCloudDollar } from 'react-icons/tb'
import { FaCircleDollarToSlot } from 'react-icons/fa'
import Testimonial from '../component/Testimonial'

export default function Home() {
	
  return (
    <>
    <section className='sec1'>
        <div className="write-up space-y-6">
			<h1>Get Started On Your Journey To Freedom, Trading And Investing In Crypto.</h1>
			<p><i>BULLS INVESTMENT</i> Offers a Seamless Infrastructure, Low Investing Capital, And Fast PayOut System, Get Involved With The Decentralized Digital Currency <i>NOW</i></p>
			<button className="text-white">Get Started</button>	
		</div>
	</section>

	<section>
		<div className="sec-main" id='services'>
			<div>
				<SiBookstack className="icons"/>
				<h3>Learn More</h3>
				<p>Learn why you need to get involved in digital currency, resources are provided for you to understand the What, Why, And How of Crypto</p>
			</div>
			<div>
				<BsPiggyBank className="icons"/>
				<h3>Our Investment Plan</h3>
				<p>Select a plan from our low capital investment scheme to kickstart your journey to crypto wealth</p>
			</div>
			<div>
				<GiPayMoney className="icons"/>
				<h3>Fund</h3>
				<p>Fund your account to activate your plan with our seamless payment option</p>
			</div>
			<div>
				<AiOutlineDollarCircle className="icons"/>
				<h3>Profit</h3>
				<p>Pick a duration for your investment as once the duration is done, your accumulated profits will be updated in your wallet.</p>
			</div>
		</div>
	</section>

	<section id="quality">
		<h2>
			Why Choose Us
		</h2>
		<div>

			<div>
				<LuShieldCheck className="shield" id="chooseUs-icons"/>
				<h3 className='pl-3 font-bold text-xl mb-3 font-mono text-white'>Top Notch Security</h3>
				<p className='text-white italic mb-4 border-b-2 last:p-4'>
					Our platform is fully secured, with one of the best TLS/SSL encryption.
				</p>
			</div>
			<div>
				<TbCloudDollar className="shield" id="chooseUs-icons"/>
				<h3 className='font-bold text-white text-xl font-mono mb-3 pl-3'>Fast Payout</h3>
				<p className='text-white italic mb-4 border-b-2 p-4'>
					We Offer Fast Withdrawals, Your Profits Are Yours Anytime Anywhere.
				</p>
			</div>
			<div>
				<FaCircleDollarToSlot className="shield" id="chooseUs-icons"/>
				<h3 className='font-mono font-bold text-white text-xl mb-3 pl-3'>Low Commisin</h3>
				<p className='text-white italic border-b-2 p-4 '>
					We Charge Little To No Fee When You Invest With Us, You Keep 99% Of Your Profit.
				</p>
			</div>

			

		</div>
	</section> 
	
	<section>
		<div className="goals space-y-5">
			<h2>Our Goals</h2>
			<p><span>BULLS INVESTMENT</span> is invested in making a better version of your financial status, the organization was established with the goal of making more blockchain network literates, and changing the financial status of the masses using the opportunity presented in the decentralized market. <br/>We offer one of the best investment plans, and a stable profit system to give you the best of your money's worth </p>
			<button>View Our Plans</button>
		</div>

		<div className="steps">
			<h2>
				Follow This 3 Easy Steps To Start Earning
			</h2>
			<ul>
				<li>
					<h3>Create Account</h3>
					<p>Create an account with us by clicking the register button in the top right corner of the page</p>
				</li>
				<button>Get Started</button>
				<li>
					<h3>Pick A Plan</h3>
					<p>Choose a plan that suits you</p>
				</li>
				<button>Get Started</button>
				<li>
					<h3>Fund</h3>
					<p>Fund your account to activate the plan and start earning.</p>
				</li>
				<button>Get Started</button>
			</ul>
		</div>
	</section>
	<Testimonial />
	<div className='ready'>
		<p>
			Are You Ready To Invest With Us
		</p>
		<button>Open An Account</button>
	</div>

	<form action="post" id="newsletter">
		<label>Join Our NewsLetter</label>
		<input type="email" placeholder="Enter Your Email" />
		<input type="submit" value="Subscribe" />
	</form>
    </>
  )
}
