import 'bulma/css/bulma.css';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='container'>
			<nav className='navbar is-light'>
				<div className='navbar-brand'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							'navbar-item' + (isActive ? ' is-active' : ' ')
						}
					>
						Список задач
					</NavLink>
				</div>
				<div className='navbar-menu'>
					<div className='navbar-start'>
						<NavLink
							to='/add'
							className={({ isActive }) =>
								'navbar-item' + (isActive ? ' is-active' : ' ')
							}
						>
							Создать задачу{' '}
						</NavLink>
					</div>
				</div>
			</nav>
			<main className='content рх-6 ру-6'>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
