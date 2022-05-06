import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	return (
		<div className='checkoutProduct' key={id}>
			<img src={image} alt={title} className='checkout__image' />

			<div className='product__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkout__rating'>{"⭐".repeat(rating)}</div>
				<button>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
