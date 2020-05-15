import React from "react";
import ChatBot from "../Apps/ChatBot/ChatBot";
import BugTracker from "../Apps/BugTracker/BugTracker";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div>
				<ul>
					{/* Header containing Route Links like navbar. */}
					<li>
						<Link to="/">Home</Link> {/* Link components of navbar */}
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
				</ul>

				<Switch>
					{/* here we'll switch the components according to paths */}
					<Route exact path="/">
						{/* exact will be used to exactly match the given path  */}
						<BugTracker />
					</Route>
					<Route path="/about">
						{/* path defined in route compnent, on requesting this path, it's child component will be rendered */}
						<ChatBot />
					</Route>
					<Route path="/topics">
						<Topics />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Topics() {
	let match = useRouteMatch();

	return (
		<div>
			<h2>Topics</h2>

			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			{/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
			<Switch>
				<Route path={`${match.path}/:topicId`}>
					<Topic />
				</Route>
				<Route path={match.path}>
					<h3>Please select a topic.</h3>
				</Route>
			</Switch>
		</div>
	);
}

function Topic() {
	let { topicId } = useParams();
	return <h3>Requested topic ID: {topicId}</h3>;
}
