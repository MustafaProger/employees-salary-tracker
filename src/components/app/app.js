import { Component } from "react";
import "../app-info/app-info";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					fullname: "Mustafa Tojiev",
					salary: 4000,
					increase: true,
					rise: true,
					id: 0,
				},
				{
					fullname: "Emil Nazarov",
					salary: 2000,
					increase: false,
					rise: false,
					id: 1,
				},
				{
					fullname: "Azamat Djanbekov",
					salary: 1500,
					increase: false,
					rise: false,
					id: 2,
				},
			],
			countEmployees: 0,
		};
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (e) => {
		let fullname = e.currentTarget.getAttribute("data-name");
		let salary = e.currentTarget.getAttribute("data-salary");

		this.setState(({ data }) => {
			const newItem = {
				fullname: fullname,
				salary: salary,
				increase: false,
				rise: false,
				id: data.length,
			};

			const newArr = [...data, newItem];

			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	render() {
		const employees = this.state.data.length;
		const increaseEmployees = this.state.data.filter(
			(item) => item.increase
		).length;

		return (
			<div className='app'>
				<AppInfo
					employees={employees}
					increaseEmployees={increaseEmployees}
				/>
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
