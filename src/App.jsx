import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path='/checkout'
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
