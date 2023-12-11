import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import fetchData from '../utility/fetchData';

const SingleArtworkCard = (props) => {
	const [name, setName] = useState('');
	const maxWords = 10;
	const sliceDescription = (description) => {
		const words = description.split(' ');
		if (words.length > maxWords) {
			return words.slice(0, maxWords).join(' ') + '...';
		}
		return description;
	};

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				const data = await fetchData(`artists/name/${props.artwork.artist}`, {
					method: 'GET'
				});
				setName(data.username)
				console.log(data);
			} catch (error) {
				console.error('Error fetching artworks:', error.message);
				// Handle the error if needed
			}
		};

		fetchDataFromApi();
	}, [props])
	return (
		<>
			<div className="card" style={{ width: "18rem", border: '2px solid black', boxShadow: '1px 1px 10px 3px grey' }}>
				<img className="card-img-top" src={props.artwork.poster} alt="artword img" />
				<div className="card-body">
					<h5 className="card-title">{props.artwork.title}</h5>
					<p className="card-text">{sliceDescription(props.artwork.description)}</p>
					<h5 className="card-title">Artist: {name}</h5>
					<Link to="/" className="btn btn-primary">Details</Link>
				</div>
			</div>
		</>
	)
}

export default SingleArtworkCard