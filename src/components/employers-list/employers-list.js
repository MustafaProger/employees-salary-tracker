import { Component } from "react";

import EmployeesListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

class EmployersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.onTransferState()
		}
	}

	updateStateData = (data) => {
		this.setState({data})
		this.props.updateStateData(data)
	}
	
	render() {
		const { data, onDelete, onToggleProp, onTransferState } = this.props;

		const elements = data.map((item) => {
			const { id, ...itemProps } = item;

			return (
				<EmployeesListItem
					id={id}
					key={id}
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleProp={(e) =>
						onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
					}
					onTransferState={onTransferState}
					updateStateData={this.updateStateData}
				/>

			);
		});

		return <ul className='app-list list-group'>{elements}</ul>;
	}
}

export default EmployersList;
