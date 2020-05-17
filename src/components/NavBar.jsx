import React from "react";
import { Redirect, NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Redirect to="/home" />
			<NavLink className="navbar-brand" to="/home">
				Navbar
			</NavLink>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item ">
						<NavLink className="nav-link" to="/bugtracker">
							BugTracker
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/chatbot">
							Boty The ChatBot
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
