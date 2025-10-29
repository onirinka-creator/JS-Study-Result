import { useState } from 'react';
import { ref, set } from 'firebase/database'; // or update
import { db } from '../firebase';

export const useRequestUpdateProduct = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateLaptop = () => {
		setIsUpdating(true);

		const laptopDbRef = ref(db, 'products/002');

		set(laptopDbRef, {
			name: 'Laptop',
			price: 999,
		})
			.then((response) => {
				console.log('Laptop updated, server response:', response);
			})
			.finally(() => setIsUpdating(false));

		// fetch('http://localhost:3005/products/002', {
		// 	method: 'PUT',
		// 	headers: { 'Content-Type': 'application/json;charset=utf-8' },
		// 	body: JSON.stringify({
		// 		name: 'Laptop',
		// 		price: 1099,
		// 	}),
		// })
		// 	.then((rawResponse) => rawResponse.json())
		// 	.then((response) => {
		// 		console.log('Laptop updated, server response:', response);
		// 		refreshProducts();
		// 	})
		// 	.finally(() => setIsUpdating(false));
	};

	return {
		isUpdating,
		requestUpdateLaptop,
	};
};
