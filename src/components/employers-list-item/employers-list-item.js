import { Component } from "react";

import "./employers-list-item.css";

class EmployeesListItem extends Component {
	changeState = (e, id) => {
		const newSalary = parseFloat(e.target.value);

		const oldArr = this.props.onTransferState();

		const updatedData = oldArr.map((item) => {
			if (item.id === id) {
				return { ...item, salary: newSalary };
			}
			return item;
		});

		this.props.updateStateData(updatedData);
	};

	render() {
		const { id, fullname, salary, onDelete, onToggleProp, increase, rise } =
			this.props;

		let classNames = "list-group-item d-flex justify-content-between";
		if (increase) {
			classNames += " increase";
		}
		if (rise) {
			classNames += " like";
		}

		return (
			<li className={classNames}>
				<span
					className='list-group-item-label'
					onClick={onToggleProp}
					data-toggle='rise'>
					{fullname}
				</span>
				<div className="list-group-salary_btns">
					<input
						type='text'
						className='list-group-item-input'
						defaultValue={salary + "$"}
						onChange={(e) => this.changeState(e, id)}
					/>
					<div className='d-flex justify-content-center align-items-center'>
						<button
							type='button'
							className='btn-cookie btn-sm '
							onClick={onToggleProp}
							data-toggle='increase'>
							<i className='fas fa-cookie'></i>
						</button>
						<button
							type='button'
							className='btn-trash btn-sm '>
							<i
								className='fas fa-trash'
								onClick={onDelete}></i>
						</button>
						<i className='fas fa-star'></i>
					</div>
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;
