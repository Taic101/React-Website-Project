import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import HomeIcon from '../assets/bubble-tea.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<div className='navigation'>
			<div className='icon-and-title'>
				<img src={HomeIcon} onClick={null} alt="Boba icons created by Freepik" width="60" height="60"></img>
				<h3>BubBly</h3>
			</div>
			<nav ref={navRef}>
				<a href="/#">Our Products</a>
				<a href="/#">Recipes</a>
				<a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar;