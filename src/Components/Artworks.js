import React, { useEffect, useState } from 'react';
import fetchData from '../utility/fetchData';
import SingleArtworkCard from './SingleArtworkCard';
import Navbar from './Navbar';

const Artworks = () => {
	const [artWorks, setArtWorks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const artworksPerPage = 10;

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				const data = await fetchData('artworks/', { method: 'GET' });
				setArtWorks(data); // Assuming the fetched data is an array of artworks
				console.log(data);
			} catch (error) {
				console.error('Error fetching artworks:', error.message);
				// Handle the error if needed
			}
		};

		fetchDataFromApi();
	}, []);

	// Calculate the indexes of the artworks to be displayed on the current page
	const indexOfLastArtwork = currentPage * artworksPerPage;
	const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
	const currentArtworks = artWorks.slice(indexOfFirstArtwork, indexOfLastArtwork);

	// Function to handle page change
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<Navbar />
			<h2 className='text-center'>Art Works</h2>
			<div>
				<div className="row" style={{ width: '95vw', height: 'fit-content', padding: '10px', border: '2px solid black', borderRadius: '10px', boxSizing: 'border-box', margin: '20px' }}>
					{currentArtworks.map((singleWork) => (
						<div key={singleWork.id} className="col-md-4 mb-4">
							{/* Assuming SingleArtworkCard is a component that takes an artwork as a prop */}
							<SingleArtworkCard artwork={singleWork} />
						</div>
					))}
				</div>
				<div className="pagination" style={{ margin: '20px' }}>
					{Array.from({ length: Math.ceil(artWorks.length / artworksPerPage) }, (_, index) => (
						<button key={index + 1} onClick={() => paginate(index + 1)}>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default Artworks;
