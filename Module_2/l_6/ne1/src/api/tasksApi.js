const DB_URL = 'http://localhost:3005/tasks';

export const getTasks = async () => {
	const response = await fetch(DB_URL);
	if (!response.ok) throw new Error('Failed to load tasks');

	return response.json();
};

export const getTaskById = async (id) => {
	const response = await fetch(`${DB_URL}/${id}`);
	if (!response.ok) throw new Error('Task not found');

	return response.json();
};

export const createTask = async (data) => {
	const response = await fetch(DB_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(data),
	});
	if (!response.ok) throw new Error('Failed to add task');

	return response.json();
};

export const updateTask = async (id, data) => {
	const response = await fetch(`${DB_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(data),
	});
	if (!response.ok) throw new Error('Failed to update task');

	return response.json();
};

export const deleteTask = async (id) => {
	const response = await fetch(`${DB_URL}/${id}`, { method: 'DELETE' });
	if (!response.ok) throw new Error('Failed to delete task');
};
