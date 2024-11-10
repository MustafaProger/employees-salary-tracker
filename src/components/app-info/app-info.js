import './app-info.css';

const AppInfo = ({employees, increaseEmployees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Мустафа</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increaseEmployees}</h2>
        </div>
    )
}

export default AppInfo;