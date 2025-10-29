import { useState } from 'react';
import styles from './app.module.css';
import { useRequestGetProducts, useRequestAddProduct, useRequestUpdateProduct, useRequestDeleteProduct } from './hooks';

// const PRODUCTS_MOCK = [
// 	{
// 		id: '001',
// 		name: 'TV',
// 		price: 1300,
// 	},
// 	{
// 		id: '002',
// 		name: 'Laptop',
// 		price: 1132,
// 	},
// 	{
// 		id: '003',
// 		name: 'Smartphone',
// 		price: 999,
// 	},
// ];

function App() {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { isLoading, products } = useRequestGetProducts(refreshProductsFlag);

	const { isCreating, requestAddVacuumCleaner } = useRequestAddProduct(refreshProducts);
	const { isUpdating, requestUpdateLaptop } = useRequestUpdateProduct(refreshProducts);
	const { isDeleting, requestDeleteTv } = useRequestDeleteProduct(refreshProducts);

	// useEffect(() => {
	// 	fetch('https://onirinka-mocko.free.mockoapp.net/result-products')
	// 		.then((loadedData) => loadedData.json())
	// 		.then((loadedProduct) => setProducts(loadedProduct));
	// }, []);

	// useEffect(() => {
	// 	setIsLoading(true);

	// 	new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve({ json: () => PRODUCTS_MOCK });
	// 		}, 5000);
	// 	})
	// 		.then((loadedData) => loadedData.json())
	// 		.then((loadedProducts) => setProducts(loadedProducts))
	// 		.finally(() => setIsLoading(false));
	// }, []);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				Object.entries(products).map(([id, { name, price }]) => (
					<div key={id}>
						{name} - {price}$
					</div>
				))
			)}
			<button onClick={requestAddVacuumCleaner} disabled={isCreating}>
				Add Vacuum cleaner
			</button>
			<button onClick={requestUpdateLaptop} disabled={isUpdating}>
				Update Laptop
			</button>
			<button onClick={requestDeleteTv} disabled={isDeleting}>
				Delete TV
			</button>
		</div>
	);
}

export default App;
