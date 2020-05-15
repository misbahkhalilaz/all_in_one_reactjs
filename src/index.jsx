import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import { BrowserRouter as Router, Link } from "react-router-dom";

ReactDOM.render(
	<Router>
		<NavBar />
		<App />
	</Router>,
	document.getElementById("root")
);

function NavBar() {
	return (
		<ul>
			<li>
				<Link to="/bugtracker">BugTracker</Link>
			</li>
			<li>
				<Link to="/chatbot">ChatBot</Link>
			</li>
		</ul>
	);
}
