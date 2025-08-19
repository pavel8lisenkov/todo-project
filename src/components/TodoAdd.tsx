import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import type { Todo } from './todos';

interface TodoAddProps {
	add: (todo: Todo) => void;
}

const TodoAdd: React.FC<TodoAddProps> = props => {
	const [title, setTitle] = useState<string>('');
	const [desc, setDesc] = useState<string>('');
	const [image, setImage] = useState<string>('');

	const handleImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const cFiles = evt.target.files;
		if (cFiles && cFiles.length > 0) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				if (typeof fileReader.result === 'string') {
					setImage(fileReader.result); // сохраняем base64
				}
			};
			fileReader.readAsDataURL(cFiles[0]);
		} else {
			setImage('');
		}
	};

	const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const date = new Date();
		const newTodo: Todo = {
			title,
			desc,
			image,
			done: false,
			createdAt: date.toLocaleString(),
			key: date.getTime(),
		};
		props.add(newTodo);
		evt.currentTarget.reset();
		setTitle('');
		setDesc('');
		setImage('');
	};

	const handleFormReset = () => {
		setTitle(' ');
		setDesc(' ');
		setImage('');
	};

	return (
		<section>
			<h1>Создание нового дела</h1>
			<form onSubmit={handleFormSubmit} onReset={handleFormReset}>
				<div className='field'>
					<label className='label'>Заголовок</label>
					<div className='control'>
						<input
							className='input'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>
				</div>
				<div className='field'>
					<label className='label'>Примечание</label>
					<div className='control'>
						<textarea
							className='textarea'
							value={desc}
							onChange={e => setDesc(e.target.value)}
						/>
					</div>
				</div>
				<div className='field'>
					<div className='file'>
						<label className='file-label'>
							{' '}
							<input
								className='file-input'
								type='file'
								accept='image/*'
								onChange={handleImageChange}
							/>{' '}
							<span className='file-cta'>
								{' '}
								<span className='file-label'>
									Графическая иллюстрация ...
								</span>{' '}
							</span>{' '}
						</label>
					</div>
				</div>

				{/* превью картинки */}
				{image && (
					<div className='field'>
						<figure className='image is-128x128'>
							<img src={image} alt='preview' />
						</figure>
					</div>
				)}
				<div className='field is-grouped is-grouped-right'>
					<div className='control'>
						{' '}
						<input
							type='reset'
							className='button is-warning is-light'
							value='Сброс'
						/>{' '}
					</div>
					<div className='control'>
						{' '}
						<input
							type='submit'
							className='button is-primary'
							value='Создать дело'
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default TodoAdd;
