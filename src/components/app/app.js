import './app.css'
import '../app-info/app-info'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

function App() {

    const data = [
        {fullname: "Mustafa Tojiev" , salary: 4000, increase: true},
        {fullname: "Emil Nazarov" , salary: 2000, increase: false},
        {fullname: "Azamat Djanbekov" , salary: 1500, increase: false},
    ]

    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data={data}/>
            <EmployeesAddForm />
        </div>
    )
}

export default App;