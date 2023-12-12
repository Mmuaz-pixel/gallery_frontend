import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fetchData from '../../utility/fetchData';
import Navbar from '../sharedComponents/Navbar';
import AddReview from '../AddReview';

const SingleArtwork = () => {
	const [artWork, setArtWork] = useState([]);
	const [name, setName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [reviews, setReviews] = useState([]);
	const params = useParams();

	useEffect(() => {
		const fetchFunction = async () => {
			const data = await fetchData(`artworks/${params.id}`, { method: 'GET' });
			setArtWork(data);
			const name = await fetchData(`artists/name/${data.artist}`, {
				method: 'GET',
			});
			setName(name.username);
			const reviewsData = await fetchData(`reviews/${params.id}`, { method: 'GET' });
			setReviews(reviewsData);
		};

		fetchFunction();
	}, [params.id]);

	const addLike = async () => {
		console.log(localStorage.getItem('username'));
		if (name == localStorage.getItem('username')) {
			setErrorMessage('Error occurred while adding like.');
			return;
		}
		try {
			const response = await fetchData('patrons/addLike', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json', // Set the Content-Type header
				},
				body: JSON.stringify({
					artworkId: params.id,
					username: localStorage.getItem('username'),
				}),
			});

			if (response.status === 200) {
				// Reload the page if like is added successfully
				window.location.reload();
			} else if (response.status === 400) {
				// Display an error message if the request is bad (e.g., already liked)
				setErrorMessage('Artwork already liked.');
			} else {
				// Handle other error cases
				setErrorMessage('Failed to add like.');
			}
		} catch (error) {
			console.error('Error during addLike:', error);
			setErrorMessage('Error occurred while adding like.');
		}
	};

	const refresh = () => 
	{
		window.location.reload()
	}

	return (
		<>
			<Navbar />
			<div className="container text-center">
				<div className="row">
					<div className="col mt-3">
						<div>
							<h2 className='mt-3'>Title: {artWork.title}</h2>
							<Link className='mt-3' to={`/artist/${artWork.artist}`} >Artist: {name}</Link>
							<h3 className='mt-3'>Category: {artWork.category}</h3>
							<h4 className='mt-3'>Year: {artWork.year}</h4>
							<h5 className='mt-3'><span><b>Description:</b></span> {artWork.description}</h5>
						</div>

						<h5>{artWork.likes} Likes</h5> <button type='submit' style={{ display: "inline", background: "none", border: "none" }}><ion-icon style={{ size: "40px" }} name="heart-circle-outline"></ion-icon></button>
						{errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
						<div>
							<button onClick={addLike}>Add Like</button>
						</div>
						<AddReview artworkId={params.id} refresh={refresh} artist={name}/>
						<div>
							<h3>Reviews</h3>
							{reviews.map((review) => (
								<div key={review._id} style={{border: '1px solid black'}}>
									<p>{review.content}</p>
								</div>
							))}
						</div>
					</div>
					<div className="col mt-3">
						<img src={artWork.poster} width='500px' alt='art works' />
					</div>


				</div>
			</div>
		</>
	)
}

export default SingleArtwork