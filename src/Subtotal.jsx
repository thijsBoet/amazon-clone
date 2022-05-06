import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

const Subtotal = ({ basket, value }) => {
	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							{/* Subtotal ({basket.length} items): <strong>{value}</strong> */}
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' name='isGift' id='isGift' />{' '}
							<label htmlFor='isGift'>This order contains a gift</label>
						</small>
					</>
				)}
				decimalScale={2}
				value={value}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</div>
	);
};

export default Subtotal;
