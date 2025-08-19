import React from 'react';
import type { Todo } from '../todos';
import './style.css';

interface TodoListProps {
	list: Todo[];
	setDone: (key: number) => void;
	del: (key: number) => void;
}

const TodoList: React.FC<TodolistProps> = ({ list, setDone, del }) => {
	return (
		<section>
			<h1 className='title'>Дела</h1>
			<div className='columns is-multiline'>
				{list.map(item => (
					<div key={item.key} className='column is-12'>
						<div
							className={`box ${
								item.done ? 'has-background-success-light' : ''
							}`}
						>
							<div className='media'>
								{item.image && (
									<div className='media-left'>
										<figure className='image is-128x128'>
											<img
												src={item.image}
												alt=''
												style={{ objectFit: 'cover' }}
											/>
										</figure>
									</div>
								)}
								<div className='media-content'>
									<div>
										<p className='title is-5'>
											{item.done ? <del>{item.title}</del> : item.title}
										</p>
										<p className='subtitle is-6'>{item.desc}</p>
									</div>
								</div>
								<div className='media-right buttons are-small'>
									<button
										className='button is-success'
										disabled={item.done}
										onClick={() => setDone(item.key)}
									>
										✔
									</button>
									<button
										className='button is-danger'
										onClick={() => del(item.key)}
									>
										✖
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TodoList;
