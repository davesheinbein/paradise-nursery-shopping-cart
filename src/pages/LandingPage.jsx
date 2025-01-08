import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import AboutUs from './AboutUs';

function LandingPage() {
	return (
		<div className='landing-page'>
			<h1>Paradise Nursery</h1>
			<p>
				Welcome to Paradise Nursery, your one-stop shop for
				beautiful houseplants.
			</p>
			<Link to='/products'>
				<button>Get Started</button>
			</Link>
			<AboutUs />
		</div>
	);
}

export default LandingPage;
