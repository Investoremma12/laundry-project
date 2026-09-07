import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Navbar from './layout/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<div>
				<Hero />
				<Services />
				<About />
				<Booking />
				<Contact />
			</div>
		</>
	);
}

export default App;
