import { Route, Routes, NavLink, Outlet, useParams, useNavigate, Navigate } from 'react-router-dom';
import styles from './app.module.css';
import { useEffect, useState } from 'react';

const database = {
	productList: [
		{ id: 5, name: 'TV' },
		{ id: 4, name: 'Laptop' },
		{ id: 3, name: 'Chair' },
		{ id: 2, name: 'Table' },
		{ id: 1, name: 'Cabel' },
	],
	products: {
		5: { id: 5, name: 'TV', price: 1340, amount: 15 },
		4: { id: 4, name: 'Laptop', price: 2000, amount: 42 },
		3: { id: 3, name: 'Chair', price: 40, amount: 123 },
		2: { id: 2, name: 'Table', price: 120, amount: 45 },
		1: { id: 1, name: 'Cabel', price: 4, amount: 376 },
	},
};

const LOADING_TIMEOUT = 3000;

const fetchProductList = () => database.productList;

const fetchProduct = (id) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(database.products[id]);
		}, 2500);
	});

const MainPage = () => <div>main page content</div>;
const Catalog = () => (
	<div>
		<h3>catalog page content</h3>
		<ul>
			{fetchProductList().map((prod) => (
				<li key={prod.id}>
					<ExtendedLink to={`product/${prod.id}`}>{prod.name}</ExtendedLink>
				</li>
			))}
		</ul>
		<Outlet />
	</div>
);
const Contacts = () => <div>contacts page content</div>;

const ProductNotFound = () => <div>Product Not Found</div>;
const ProductLoadError = () => <div>Error loading product. Please try again later</div>;
const Product = () => {
	const [product, setProduct] = useState(null);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isProductLoaded) {
				navigate('/product-load-error', { replace: true });
			}
		}, LOADING_TIMEOUT);

		fetchProduct(params.id).then((loadedProduct) => {
			isProductLoaded = true;

			if (!isLoadingTimeout) {
				if (!loadedProduct) {
					navigate('/product-not-exist');
					return;
				}

				setProduct(loadedProduct);
			}
		});
	}, [params.id, navigate]);

	if (!product) {
		return null;
	}

	const { name, price, amount } = product;

	return (
		<div>
			<h1>Product - {name}</h1>
			<p>Cost: {price}$</p>
			<p>Amount: {amount}</p>
		</div>
	);
};
const NotFound = () => <div>404 Not Found</div>;

const ExtendedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span>{children}</span>
					<span>*</span>
				</>
			) : (
				children
			)
		}
	</NavLink>
);

function App() {
	return (
		<div className={styles.app}>
			<div>
				<h3>Menu</h3>
				<ul>
					<li>
						<ExtendedLink to="/">Main</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/catalog">Catalog</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/contacts">Contacts</ExtendedLink>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/catalog" element={<Catalog />}>
					<Route path="product/:id" element={<Product />}></Route>
				</Route>
				<Route path="/contacts" element={<Contacts />}></Route>
				<Route path="/product-load-error" element={<ProductLoadError />}></Route>
				<Route path="/product-not-exist" element={<ProductNotFound />}></Route>
				<Route path="/404" element={<NotFound />}></Route>
				<Route path="*" element={<Navigate to="/404" replace={true} />}></Route>
			</Routes>
		</div>
	);
}

export default App;
