import React from 'react'
import '../footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

  return (
    <>
    <footer className="footer">
		<div className="links">
			<ul>
				<h3>Info</h3>
				<li>
					<Link to="/contact" className='redirect'>About Us</Link>
				</li>
				<li>
					<Link to="/contact" className='redirect'>Contact Us</Link>
				</li>
				<li>
					<a href="#services" className='redirect'>Services</a>
				</li>
			</ul>
			<ul>
				<h3>Customer Care</h3>
				<li>
					<a href="mailto:bullsinvestment261@gmail.com" target="_blank" rel='noopener noreferrer' className='redirect'>Email</a>
				</li>
				<li>
					<Link to="/faq" className='redirect'>FAQs</Link>
				</li>
			</ul>

			<ul>
				<h3>Links</h3>
				<li>
					<a href="https://luno.com" className='redirect'>Buy Bitcoin</a>
				</li>
				<li>
					<Link to="/sign-in" className='redirect'>Login</Link>
				</li>
				<li>
					<Link to="/profile" className='redirect'>Invest</Link>
				</li>
			</ul>
		</div>
		<div className="copyrights">
			<ul>
				<li>
					<span>
						All Rights Reserved
					</span>
				</li>
				<li>
					<span>
						Copyrights 2020
					</span>
				</li>
			</ul>
		</div>
		
	</footer>
    </>
  )
}
