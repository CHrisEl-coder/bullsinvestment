import React from 'react'
import '../footer.css'

export default function Footer() {
  return (
    <>
    <footer class="footer">
		<div class="links">
			<ul>
				<h3>Info</h3>
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
			</ul>
			<ul>
				<h3>Customer Care</h3>
				<li>
					<a href="#">Email</a>
				</li>
				<li>
					<a href="#">FAQs</a>
				</li>
				<li>
					<a href="#">Terms Of Use</a>
				</li>
			</ul>

			<ul>
				<h3>Links</h3>
				<li>
					<a href="#">Buy Bitcoin</a>
				</li>
				<li>
					<a href="#">Login</a>
				</li>
				<li>
					<a href="#">Invest</a>
				</li>
			</ul>
		</div>
		<div class="copyrights">
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
