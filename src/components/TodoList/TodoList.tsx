import { useState } from 'react';
import type { Todo } from '../../todos';
import { todos as initialTodos } from '../../todos';
import './style.css';

const TodoList = () => {
	const [todos, setTodos] = useState(initialTodos);

	const setDone = (key: number): void => {
		const newTodos = [...todos];

		const todo = newTodos.find((current: Todo) => {
			if (current.key === key) {
				return true;
			} else {
				return false;
			}
		});
		if (todo) {
			todo.done = true;
		}
		setTodos(newTodos);
	};

	const del = (key: number): void => {
		const newTodos = todos.filter((current: Todo) => {
			if (current.key !== key) {
				return current;
			}
		});
		setTodos(newTodos);
	};

	return (
		<section>
			<h1 className='title'>Дела</h1>
			<div className='todo-list'>
				{todos.map(item => (
					<div key={item.key} className='todo-item'>
						<div className='todo-content'>
							<span className='todo-title'>
								{item.done ? <del>{item.title}</del> : item.title}
							</span>
							<span className='todo-desc'>{item.desc}</span>
						</div>
						<div className='todo-buttons buttons are-small'>
							<button
								className='button is-success is-small'
								disabled={item.done}
								onClick={() => setDone(item.key)}
							>
								✔
							</button>
							<button
								className='button is-danger is-small'
								onClick={() => del(item.key)}
							>
								✖
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TodoList;
