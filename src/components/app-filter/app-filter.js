import './app-filter.css';

const AppFilter = () => {
  return (
    <div className='btn-group'>
      <button class='btn btn-light' type='button'>
        Все сотрудники
      </button>
      <button class='btn btn-outline-light' type='button'>
        Сотрудники на повышения
      </button>
      <button class='btn btn-outline-light' type='button'>
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;