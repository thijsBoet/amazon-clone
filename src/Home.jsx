import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
	return (
		<div>
			<div className='home'>
				<div className='home__container'>
					<img
						src='./hero-image.jpg'
						alt='Hero Ecommerce Image'
						className='home__image'
					/>
					<div className='home__row'>
						<Product />
						<Product />
					</div>
					<div className='home__row'>
						<Product />
						<Product />
						<Product />
					</div>
					<div className='home__row'>
						<Product />
						<Product />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
