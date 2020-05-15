import React from "react";
import ChatBot from "../Apps/ChatBot/ChatBot";
import BugTracker from "../Apps/BugTracker/BugTracker";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

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
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link class="navbar-brand" to="/">
				Navbar
			</Link>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item ">
						<Link class="nav-link" to="/bugtracker">
							BugTracker
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/chatbot">
							Boty The ChatBot
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
