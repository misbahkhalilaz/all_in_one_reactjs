import React from "react";
import ChatBot from "../Apps/ChatBot/ChatBot";
import BugTracker from "../Apps/BugTracker/BugTracker";
import { Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Switch>
			<Route path="/bugtracker">
				<BugTracker />
			</Route>
			<Route path="/chatbot">
				<ChatBot />
			</Route>
		</Switch>
	);
}
