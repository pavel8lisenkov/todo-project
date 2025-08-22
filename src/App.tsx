import 'bulma/css/bulma.css';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const handleBurgerClick = (evt: React.MouseEvent<HTMLElement>) => {
		evt.preventDefault();
		setShowMenu(!showMenu);
	};

	const handleMenuClose = () => {
		setShowMenu(false);
	};

	return (
		<div className='container'>
			<nav className='navbar is-light'>
				<div className='navbar-brand'>
					<a
						href='/'
						className={showMenu ? 'navbar-burger is-active' : 'navbar-burger'}
						onClick={handleBurgerClick}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>

				{/* на мобильных: showMenu управляет видимостью, на десктопе menu всегда видно */}
				<div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
					<div className='navbar-start'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								'navbar-item' + (isActive ? ' is-active' : '')
							}
							onClick={handleMenuClose}
						>
							Список задач
						</NavLink>
						<NavLink
							to='/add'
							className={({ isActive }) =>
								'navbar-item' + (isActive ? ' is-active' : '')
							}
							onClick={handleMenuClose}
						>
							Создать задачу
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
