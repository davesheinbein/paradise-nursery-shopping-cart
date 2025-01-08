import React from 'react';
// import './ProductListingPage.css';

const plantsArray = [
	{
		category: 'Air Purifying Plants',
		plants: [
			{
				name: 'Snake Plant',
				image:
					'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
				description:
					'Produces oxygen at night, improving air quality.',
				cost: '$15',
			},
			{
				name: 'Spider Plant',
				image:
					'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
				description:
					'Filters formaldehyde and xylene from the air.',
				cost: '$12',
			},
			{
				name: 'Peace Lily',
				image:
					'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
				description:
					'Removes mold spores and purifies the air.',
				cost: '$18',
			},
			{
				name: 'Boston Fern',
				image:
					'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
				description:
					'Adds humidity to the air and removes toxins.',
				cost: '$20',
			},
			{
				name: 'Rubber Plant',
				image:
					'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
				description:
					'Removes toxins and improves air quality.',
				cost: '$25',
			},
		],
	},
	{
		category: 'Low Light Plants',
		plants: [
			{
				name: 'ZZ Plant',
				image:
					'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
				description: 'Thrives in low light conditions.',
				cost: '$22',
			},
			{
				name: 'Pothos',
				image:
					'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
				description:
					'Grows well in low light and purifies the air.',
				cost: '$15',
			},
			{
				name: 'Philodendron',
				image:
					'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
				description:
					'Adaptable to low light and easy to care for.',
				cost: '$18',
			},
			{
				name: 'Cast Iron Plant',
				image:
					'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
				description: 'Tolerates low light and neglect.',
				cost: '$20',
			},
		],
	},
];

function ProductListingPage({ addToCart }) {
	return (
		<div className='product-listing'>
			{plantsArray.map((category) => (
				<div key={category.category}>
					<h2>{category.category}</h2>
					{category.plants.map((plant) => (
						<div key={plant.name} className='plant'>
							<img src={plant.image} alt={plant.name} />
							<h3>{plant.name}</h3>
							<p>{plant.description}</p>
							<p>{plant.cost}</p>
							<button onClick={() => addToCart(plant)}>
								Add to Cart
							</button>
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default ProductListingPage;
