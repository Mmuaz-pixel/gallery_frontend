import './App.css';
import Navbar from './Components/Navbar';
import Artworks from './Components/Artworks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
		<div className="App">
			<Routes>
			<Route path='/'  element={<Artworks />} />
			</Routes>
		</div>
		</Router>
	);
}

export default App;
