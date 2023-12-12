import React, { useState } from 'react';
import fetchData from '../utility/fetchData';

const AddReview = ({ artworkId, refresh, artist }) => {
	const [content, setContent] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleAddReview = async () => {
		if(artist == localStorage.getItem('username'))
		{
			setErrorMessage('Cant add review to own artwork');
			return
		}
		try {
			console.log(artworkId); 
			const response = await fetchData(`reviews/addreview/${artworkId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: localStorage.getItem('username'),
					content,
				}),
			});

			if (response.status === 200) {
				// Reset content and clear error message on successful review addition
				setContent('');
				setErrorMessage('');
			} else {
				// Handle other error cases
				setErrorMessage('Failed to add review.');
			}
			refresh(); 
		} catch (error) {
			console.error('Error during addReview:', error);
			setErrorMessage('Error occurred while adding review.');
		}
	};

	return (
		<div>
			<h3>Add a Review</h3>
			<textarea
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="Write your review here..."
			/>
			{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
			<button onClick={handleAddReview}>Submit Review</button>
		</div>
	);
};

export default AddReview;
