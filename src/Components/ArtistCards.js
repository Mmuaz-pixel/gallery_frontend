import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCards = (props) => {
	return (
		<div className="card" style={{ width: "18rem", border: '2px solid black', boxShadow: '1px 1px 10px 3px grey' }}>
			<div className="card-body">
				<h5 className="card-title">{props.artist.username}</h5>
				<h5 className="card-title">Artworks: {props.artist.artworks.length}</h5>
				<h5 className="card-title">Workshops: {props.artist.artworks.length}</h5>
				<h5 className="card-title">Followers: {props.artist.followers.length}</h5>
				<Link to={`/artist/${props.artist.id}`} className="btn btn-primary">See profile</Link>
			</div>
		</div>
	)
}

export default ArtistCards