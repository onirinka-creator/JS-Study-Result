import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteProduct = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTv = () => {
		setIsDeleting(true);

		const tvDbRef = ref(db, 'products/001');

		remove(tvDbRef)
			.then((response) => {
				console.log('TV deleted, server response:', response);
			})
			.finally(() => setIsDeleting(false));

		// fetch('http://localhost:3005/products/001', {
		// 	method: 'DELETE',
		// })
		// 	.then((rawResponse) => rawResponse.json())
		// 	.then((response) => {
		// 		console.log('TV deleted, server response:', response);
		// 		refreshProducts();
		// 	})
		// 	.finally(() => setIsDeleting(false));
	};

	return {
		isDeleting,
		requestDeleteTv,
	};
};
