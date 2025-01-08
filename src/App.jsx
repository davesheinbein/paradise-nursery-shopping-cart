import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './App.css';

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (plant) => {
		setCart([...cart, plant]);
	};

	const removeFromCart = (plant) => {
		setCart(cart.filter((item) => item.id !== plant.id));
	};

	const updateCartQuantity = (plant, quantity) => {
		setCart(
			cart.map((item) =>
				item.id === plant.id ? { ...item, quantity } : item
			)
		);
	};

	return (
		<Router>
			<header>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/products'>Products</Link>
					<Link to='/cart'>Cart ({cart.length})</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route
					path='/products'
					element={
						<ProductListingPage addToCart={addToCart} />
					}
				/>
				<Route
					path='/cart'
					element={
						<ShoppingCartPage
							cart={cart}
							removeFromCart={removeFromCart}
							updateCartQuantity={updateCartQuantity}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
