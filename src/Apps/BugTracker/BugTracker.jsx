import React from "react";
import CardContainer from "./containers/CardContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function BugTracker() {
	return (
		<Provider store={store}>
			<CardContainer id="app" />
		</Provider>
	);
}
