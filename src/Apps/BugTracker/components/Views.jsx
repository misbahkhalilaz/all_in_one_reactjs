import React from "react";
import { connect } from "react-redux";
import { visibilityFilters } from "../redux/actionTypes";
import { changeFilter } from "../redux/actionCreators";
import { Button, ButtonGroup, InputGroup } from "react-bootstrap";

function Views(props) {
	return (
		<>
			<InputGroup className="mb-3" style={{ paddingLeft: "100px" }}>
				<InputGroup.Prepend>
					<InputGroup.Text>View:</InputGroup.Text>
				</InputGroup.Prepend>
				<ButtonGroup>
					<Button
						variant="outline-info"
						onClick={() => props.changeFilter(visibilityFilters.SHOW_ALL)}
						active={
							props.visibilityFilter === visibilityFilters.SHOW_ALL
								? true
								: false
						}
					>
						All
					</Button>
					<Button
						variant="outline-info"
						onClick={() => props.changeFilter(visibilityFilters.SHOW_ACTIVE)}
						active={
							props.visibilityFilter === visibilityFilters.SHOW_ACTIVE
								? true
								: false
						}
					>
						Active
					</Button>
					<Button
						variant="outline-info"
						onClick={() => props.changeFilter(visibilityFilters.SHOW_COMP)}
						active={
							props.visibilityFilter === visibilityFilters.SHOW_COMP
								? true
								: false
						}
					>
						Resolved
					</Button>
				</ButtonGroup>
			</InputGroup>
		</>
	);
}

export default connect(
	(state, ownProps) => ({ visibilityFilter: state.visibilityFilter }),
	{ changeFilter }
)(Views);
