import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { bugRemoved } from "../redux/actionCreators";
import Getlist from "./GetList";
import filterBugs from "../redux/selectors/selectByVisibility";

function Body(props) {
	const ref = React.createRef();

	useEffect(() => ref.current.scrollIntoView({ behaviour: "smooth" }));

	return (
		<>
			<Getlist bugs={props.bugs} />
			<Button
				ref={ref}
				variant="outline-danger"
				size="sm"
				style={{ marginTop: "10px" }}
				onClick={() => {
					props.bugs.forEach((obj) =>
						obj.resolved ? props.bugRemoved(obj.id) : null
					);
				}}
				block
			>
				Delete Selected
			</Button>
		</>
	);
}

const mapStateToProps = (state) => ({
	bugs: filterBugs(state),
});

export default connect(mapStateToProps, { bugRemoved })(Body);
