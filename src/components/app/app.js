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
				{ fullname: "Mustafa Tojiev", salary: 4000, increase: true, id: 0 },
				{ fullname: "Emil Nazarov", salary: 2000, increase: false, id: 1 },
				{ fullname: "Azamat Djanbekov", salary: 1500, increase: false, id: 2 },
			],
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
        e.preventDefault();
        this.setState(({ data }) => {
            const newItem = {fullname: "DIOR", salary: 55500, increase: false, id: data.length }
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

	render() {
		return (
			<div className='app'>
				<AppInfo />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
