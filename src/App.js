import './App.css';
import Artworks from './Components/Artworks/Artworks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
	return (
		<Router>
		<div className="App">
			<Routes>
			<Route path='/'  element={<Artworks />} />
			<Route path='/login'  element={<Login />} />
			<Route path='/register'  element={<Register />} />
			</Routes>
		</div>
		</Router>
	);
}

export default App;
