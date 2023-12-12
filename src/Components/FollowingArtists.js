import React, { useState, useEffect } from 'react'
import fetchData from '../utility/fetchData';
import Navbar from './sharedComponents/Navbar';
import ArtistCards from './ArtistCards'

const FollowingArtists = () => {
	const [artists, setArtists] = useState([]);
	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				const data = await fetchData(`patrons/following/${localStorage.getItem('username')}`, { method: 'GET' });
				setArtists(data); // Assuming the fetched data is an array of artworks
				console.log(data);
			} catch (error) {
				console.error('Error fetching artworks:', error.message);
				// Handle the error if needed
			}
		};

		fetchDataFromApi();
	}, []);
	return (
		<>
			<h2 className='text-center'>Following Artists</h2>
			<div>
				<div className="row" style={{ width: '95vw', height: 'fit-content', padding: '10px', border: '2px solid black', borderRadius: '10px', boxSizing: 'border-box', margin: '20px' }}>
					{artists.map((artist) => (
						<div key={artist.id} className="col-md-4 mb-4">
							{/* Assuming SingleArtworkCard is a component that takes an artwork as a prop */}
							<ArtistCards artists = {artists} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default FollowingArtists