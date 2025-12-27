const DB_URL = 'http://localhost:3005/todos';

export const getTodos = async () => {
	const response = await fetch(DB_URL);
	if (!response.ok) throw new Error('Failed to load todos');

	return response.json();
};

export const getTodo = async (id) => {
	const response = await fetch(`${DB_URL}/${id}`);
	if (!response.ok) throw new Error('Failed to load todo');

	return response.json();
};

export const postTodos = async (data) => {
	const response = await fetch(DB_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(data),
	});
	if (!response.ok) throw new Error('Failed to add todo');

	return response.json();
};

export const updateTodos = async (id, data) => {
	const response = await fetch(`${DB_URL}/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(data),
	});
	if (!response.ok) throw new Error('Failed to update todo');

	return response.json();
};

export const deleteTodos = async (id) => {
	const response = await fetch(`${DB_URL}/${id}`, { method: 'DELETE' });
	if (!response.ok) throw new Error('Failed to delete todo');
};
