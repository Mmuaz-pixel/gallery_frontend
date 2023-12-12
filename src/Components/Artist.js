import React, { useEffect, useState } from 'react'
import fetchData from '../utility/fetchData';
import { useParams } from 'react-router-dom'
import SingleArtworkCard from './Artworks/SingleArtworkCard';
import Navbar from './sharedComponents/Navbar';

const Artist = () => {
	const params = useParams();
	const [artist, setArtist] = useState([]);
	const [artWorks, setArtWorks] = useState([]);

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				const data = await fetchData(`artists/name/${params.id}`, {
					method: 'GET'
				});
				setArtist(data)
				const userartworks = await fetchData(`artists/artworks/${data.username}`, { method: 'GET' });
				setArtWorks(userartworks); // Assuming the fetched data is an array of artworks
				console.log(data);
				console.log(userartworks);
			} catch (error) {
				console.error('Error fetching artworks:', error.message);
				// Handle the error if needed
			}
		};

		fetchDataFromApi();
	}, [params])

	return (
		<>
		<Navbar/>
			<h2 className='text-center'>Artist Details</h2>
			<div className='text-center'>
				<h4>Username: {artist.username}</h4>
			</div>

			<h2 className='text-center'>Artworks</h2>
			<div className="row" style={{ width: '95vw', height: 'fit-content', padding: '10px', border: '2px solid black', borderRadius: '10px', boxSizing: 'border-box', margin: '20px' }}>
				{artWorks.map((singleWork) => (
					<div key={singleWork.id} className="col-md-4 mb-4">
						{/* Assuming SingleArtworkCard is a component that takes an artwork as a prop */}
						<SingleArtworkCard artwork={singleWork} />
					</div>
				))}
			</div>

		</>
	)
}

export default Artist;