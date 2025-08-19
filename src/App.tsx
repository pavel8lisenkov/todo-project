import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import type { Todo } from './components/todos';
import { todos as initialTodos } from './components/todos';

function App() {
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

	const add = (newTodo: Todo): void => {
		setTodos([...todos, newTodo]);
	};

	return (
		<div className='container'>
			<nav className='navbar is-light'>
				<div className='navbar-brand'>
					<span className='navbar-item is-uppercase'> Todos </span>
				</div>
			</nav>
			<main className='content рх-6 ру-6'>
				<TodoList list={todos} setDone={setDone} del={del} />
				<TodoAdd add={add} />
			</main>
		</div>
	);
}

export default App;
