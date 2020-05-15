import React from "react";
import ChatCard from "./containers/ChatCard";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function ChatBot(props) {
	return (
		<Provider store={store}>
			<ChatCard id="app" />
		</Provider>
	);
}
