import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';

import TodoList from './components/TodoList/TodoList';

import App from './App';
import TodoAdd from './components/TodoAdd';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} element={<TodoList />} />
			<Route path='add' element={<TodoAdd />} />
		</Route>
	)
);

export default router;
