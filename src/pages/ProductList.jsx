import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import plantsArray from './plantsArray.json';

function ProductList() {
	const [showCart, setShowCart] = useState(false);
	const [showPlants, setShowPlants] = useState(false);
	const [addedToCart, setAddedToCart] = useState({});
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const styleObj = {
		backgroundColor: '#4CAF50',
		color: '#fff!important',
		padding: '15px',
		display: 'flex',
		justifyContent: 'space-between',
		alignIems: 'center',
		fontSize: '20px',
	};
	const styleObjUl = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '1100px',
	};
	const styleA = {
		color: 'white',
		fontSize: '30px',
		textDecoration: 'none',
	};

	const handleCartClick = (e) => {
		e.preventDefault();
		setShowCart(true);
	};

	const handlePlantsClick = (e) => {
		e.preventDefault();
		setShowPlants(true);
		setShowCart(false);
	};

	const handleContinueShopping = (e) => {
		e.preventDefault();
		setShowCart(false);
	};

	const handleAddToCart = (product) => {
		dispatch(addItem(product));

		setAddedToCart((prevState) => ({
			...prevState,
			[product.name]: true,
		}));
	};

	return (
			<div style={{ padding: '20px', margin: '20px' }}>
			<div className='navbar' style={styleObj}>
				<div className='tag'>
					<a
						href='/paradise-nursery-shopping-cart-app/'
						style={{ textDecoration: 'none' }}
						className='luxury'
					>
						<img
							src='https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png'
							alt=''
						/>
						<div className='luxury-text'>
							<div>
								<h3 style={{ color: 'white' }}>
									Paradise Nursery
								</h3>
								<i style={{ color: 'white' }}>
									Where Green Meets Serenity
								</i>
							</div>
						</div>
					</a>
				</div>
				<div style={styleObjUl}>
					<div>
						{' '}
						<a
							href='#'
							onClick={(e) => handlePlantsClick(e)}
							style={styleA}
						>
							Plants
						</a>
					</div>
					<div>
						{' '}
						<a
							href='#'
							onClick={(e) => handleCartClick(e)}
							style={styleA}
						>
							<h1 className='cart'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 256 256'
									id='IconChangeColor'
									height='68'
									width='68'
								>
									<rect
										width='156'
										height='156'
										fill='none'
									></rect>
									<circle cx='80' cy='216' r='12'></circle>
									<circle cx='184' cy='216' r='12'></circle>
									<path
										d='M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8'
										fill='none'
										stroke='#faf9f9'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										id='mainIconPathAttribute'
									></path>
									<text
										x='90'
										y='155'
										font-family='Verdana'
										font-size='90'
										fill='white'
									>
										{cart.numOfItems}
									</text>
								</svg>
							</h1>
						</a>
					</div>
				</div>
			</div>
			{!showCart ? (
				<div>
					{plantsArray.map((section, sectionIndex) => (
						<div
							className='product-grid'
							key={sectionIndex}
						>
							<h2 className='plant_heading'>
								{section.category}
							</h2>
							<div className='product-list'>
								{section.plants.map((plant, plantIndex) => (
									<div
										className='product-card'
										key={plantIndex}
									>
										<h3 className='product-title'>
											{plant.name}
										</h3>
										<img
											className='product-image'
											src={plant.image}
											alt={plant.name}
										/>
										<p className='product-price'>
											{plant.cost}
										</p>
										<p>{plant.description}</p>
										{cart.items.some(
											(item) => item.name === plant.name
										) ? (
											<button className='product-button added-to-cart'>
												Added to Cart
											</button>
										) : (
											<button
												className='product-button'
												onClick={() =>
													handleAddToCart(plant)
												}
											>
												Add to Cart
											</button>
										)}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			) : (
				<CartItem
					onContinueShopping={handleContinueShopping}
				/>
			)}
		</div>
	);
}

export default ProductList;
