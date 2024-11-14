import { Component } from "react";
import "./app-rules.css";

class Rules extends Component {
	render() {
		const { openModal, closeModal, onTransferStateModal } = this.props;

		const active = onTransferStateModal() === true;
		const clazz = active ? "open" : "close";

		return (
			<div className='rules-use'>
				<button
					className='rules-use__btn'
					onClick={openModal}>
					Как пользоваться веб-приложением
				</button>

				<div className={`rules-use__dialog ${clazz}`}>
					<div className="rules-use__content">
						<div
							data-close=''
							className='rules-use__closer'
							onClick={closeModal}>
							&times;
						</div>
						<div className='rules-use__text'>
							<h3>Главный экран</h3>
							<p>
								В верхнем блоке приложения отображается{" "}
								<strong>общее число сотрудников</strong> и{" "}
								<strong>
									количество сотрудников, которым назначена премия
								</strong>
								.
							</p>

							<h3>Поиск и фильтрация</h3>
							<p>Вы можете искать сотрудников по имени или псевдониму.</p>
							<p>Для фильтрации доступны следующие категории:</p>
							<ul>
								<li>
									<strong>Все сотрудники</strong> — список всех сотрудников.
								</li>
								<li>
									<strong>Сотрудники с повышением</strong> — список сотрудников,
									которым назначено повышение.
								</li>
								<li>
									<strong>Сотрудники с зарплатой выше 1000 долларов</strong> —
									отображает сотрудников, чья зарплата превышает 1000$.
								</li>
							</ul>

							<h3>Информация о сотрудниках</h3>
							<p>Для каждого сотрудника отображаются следующие данные:</p>
							<ul>
								<li>
									<strong>Имя/Никнейм</strong> — информация о сотруднике,
									которую можно вводить свободно.
								</li>
								<li>
									<strong>Зарплата</strong> — зарплата сотрудника (указывать в
									долларах).
								</li>
							</ul>
							<p>
								<strong>Назначение повышения</strong>: При клике на данные
								сотрудника справа появится иконка звезды{" "}
								<i
									className='fas fa-star'
									style={{ color: "#FFD700" }}></i>
								, что означает назначение сотруднику повышения.
							</p>
							<p>
								<strong>Назначение премии</strong>: Клик по иконке в форме
								печенья{" "}
								<i
									className='fas fa-cookie'
									style={{ color: "#DF9F3E" }}></i>{" "}
								добавит сотрудника в список на получение премии.
							</p>
							<p>
								<strong>Удаление сотрудника</strong>: Клик по иконке корзины{" "}
								<i
									className='fas fa-trash'
									style={{ color: "#e5383b" }}></i>{" "}
								удаляет сотрудника из списка.
							</p>

							<h3>Добавление нового сотрудника</h3>
							<p>
								В соответствующем блоке можно добавить нового сотрудника, указав
								его данные (имя/псевдоним) и зарплату (в долларах).
							</p>

							<p>
								Эти правила помогут вам эффективно использовать приложение и
								управлять информацией о сотрудниках.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Rules;
