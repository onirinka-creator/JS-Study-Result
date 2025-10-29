import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDsPcAfOapsuLEkFGKcx8tXhEurnpfN84w',
	authDomain: 'result-onirinka-products.firebaseapp.com',
	projectId: 'result-onirinka-products',
	storageBucket: 'result-onirinka-products.firebasestorage.app',
	messagingSenderId: '427876669805',
	appId: '1:427876669805:web:2c565e06de9130c2716264',
	databaseURL: 'https://result-onirinka-products-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
