import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddProduct = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddVacuumCleaner = () => {
		setIsCreating(true);

		const productsDbRef = ref(db, 'products');

		push(productsDbRef, {
			name: 'Vacuum Cleaner',
			price: 46,
		})
			.then((response) => {
				console.log('Vacuum cleaner added, server response:', response);
			})
			.finally(() => setIsCreating(false));

		// fetch('http://localhost:3005/products', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json;charset=utf-8' },
		// 	body: JSON.stringify({
		// 		name: 'New Vacuum Cleaner',
		// 		price: 46,
		// 	}),
		// })
		// 	.then((rawResponse) => rawResponse.json())
		// 	.then((response) => {
		// 		console.log('Vacuum cleaner added, server response:', response);
		// 		refreshProducts();
		// 	})
		// 	.finally(() => setIsCreating(false));
	};

	return {
		isCreating,
		requestAddVacuumCleaner,
	};
};
