import React from 'react';
// import './ShoppingCartPage.css';

function ShoppingCartPage({
	cart,
	removeFromCart,
	updateCartQuantity,
}) {
	const totalCost = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className='shopping-cart'>
			<h1>Shopping Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<div>
					{cart.map((item) => (
						<div key={item.id} className='cart-item'>
							<img src={item.image} alt={item.name} />
							<h2>{item.name}</h2>
							<p>${item.price}</p>
							<div>
								<button
									onClick={() =>
										updateCartQuantity(
											item,
											item.quantity - 1
										)
									}
								>
									-
								</button>
								<span>{item.quantity}</span>
								<button
									onClick={() =>
										updateCartQuantity(
											item,
											item.quantity + 1
										)
									}
								>
									+
								</button>
							</div>
							<button onClick={() => removeFromCart(item)}>
								Remove
							</button>
						</div>
					))}
					<h2>Total: ${totalCost}</h2>
					<button>Checkout</button>
					<button>Continue Shopping</button>
				</div>
			)}
		</div>
	);
}

export default ShoppingCartPage;
