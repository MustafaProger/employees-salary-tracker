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
			term: "",
			filter: 'all'
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

	searchEmp = (items, term) => {
		if (term.length === 0) return items;

		return items.filter((item) => {
			return item.fullname.indexOf(term) > -1;
		});
	};

	riseEmp = (items, btns) => {
		// eslint-disable-next-line array-callback-return
		btns.map((btn) => {
			if (btn.className === "btn btn-outline-light") return items;
		});

		return items.filter((item) => {
			return item.rise;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increaseEmployees = this.state.data.filter(
			(item) => item.increase
		).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className='app'>
				<AppInfo
					employees={employees}
					increaseEmployees={increaseEmployees}
				/>
				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>
				<EmployersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
