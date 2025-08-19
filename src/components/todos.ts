const date1: Date = new Date(2024, 6, 18, 10, 24);
const date2: Date = new Date(2024, 6, 19, 14, 47);

export interface Todo {
	title: string;
	desc: string;
	image: string;
	done: boolean;
	createdAt: string;
	key: number;
}

export const todos: Todo[] = [
	{
		title: 'Изучить React',
		desc: 'Да поскорее 1',
		image: '',
		done: true,
		createdAt: date1.toLocaleString(),
		key: date1.getTime(),
	},
	{
		title: 'Написать первое React-приложение',
		desc: 'Список запланированных дел',
		image: '',
		done: false,
		createdAt: date2.toLocaleString(),
		key: date2.getTime(),
	},
];
