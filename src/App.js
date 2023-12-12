import './App.css';
import Artworks from './Components/Artworks/Artworks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import SingleArtwork from './Components/Artworks/SingleArtwork';
import Artist from './Components/Artist';

function App() {
	return (
		<Router>
		<div className="App">
			<Routes>
			<Route path='/'  element={<Artworks />} />
			<Route path='/login'  element={<Login />} />
			<Route path='/register'  element={<Register />} />
			<Route path='/artwork/:id' element={<SingleArtwork/>}/>
			<Route path='/artist/:id' element={<Artist/>}/>
			</Routes>
		</div>
		</Router>
	);
}

export default App;
