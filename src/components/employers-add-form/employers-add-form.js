import { Component } from "react";
import "./employers-add-form.css";

class EmployersAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: "",
			salary: "",
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (
			this.state.fullname.length < 3 ||
			!this.state.salary ||
			this.state.salary < -1
		)
			return;
			
		this.props.onAdd(e);
		this.setState({
			fullname: "",
			salary: "",
		});
	};

	render() {
		const { fullname, salary } = this.state;

		return (
			<div className='app-add-form'>
				<h3>Добавьте нового сотрудника</h3>
				<form
					className='add-form d-flex'
					onSubmit={this.onSubmit}
					data-name={fullname}
					data-salary={salary}>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='Как его зовут?'
						name='fullname'
						value={fullname}
						onChange={this.onValueChange}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='З/П в $?'
						name='salary'
						value={salary}
						onChange={this.onValueChange}
					/>
					<button
						type='submit'
						className='btn btn-outline-light'>
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployersAddForm;
