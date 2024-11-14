import './app-info.css';

const AppInfo = ({employees, increaseEmployees}) => {
    return (
        <div className="app-info">
            <h2>Общее число сотрудников: <span>{employees}</span></h2>
            <h2>Премию получат: <span>{increaseEmployees}</span></h2>
        </div>
    )
}

export default AppInfo;