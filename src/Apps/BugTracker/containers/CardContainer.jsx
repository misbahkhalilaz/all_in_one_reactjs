import React from "react";
import Views from "../components/Views";
import Body from "../components/Body";
import { Card } from "react-bootstrap";
import InputForm from "../components/InputForm";

export default function CardContainer() {
	return (
		<Card id="card">
			<Card.Header>
				<InputForm />
			</Card.Header>
			<Card.Body
				style={{
					scrollBehavior: "smooth",
					maxHeight: "480px",
					minHeight: "480px",
					overflow: "auto",
				}}
			>
				<Body />
			</Card.Body>
			<Card.Footer>
				<Views />
			</Card.Footer>
		</Card>
	);
}
