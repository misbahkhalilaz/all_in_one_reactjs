import React from "react";
import ChatBot from "../Apps/ChatBot/ChatBot";
import BugTracker from "../Apps/BugTracker/BugTracker";
import {
	Switch,
	Route,
	BrowserRouter as Router,
	NavLink,
	Redirect,
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/bugtracker">
					<BugTracker />
				</Route>
				<Route path="/chatbot">
					<ChatBot />
				</Route>
			</Switch>
		</Router>
	);
}

function NavBar() {
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
