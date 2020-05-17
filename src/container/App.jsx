import React from "react";
import ChatBot from "../Apps/ChatBot/ChatBot";
import BugTracker from "../Apps/BugTracker/BugTracker";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

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
			<Footer />
		</Router>
	);
}
