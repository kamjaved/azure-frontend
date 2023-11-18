import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import User from './pages/User';

function App() {
	return (
		<main>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Hero />} />
				<Route path="/users" element={<User />} />
			</Routes>
		</main>
	);
}

export default App;
