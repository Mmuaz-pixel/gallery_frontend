import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar-expand-lg navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
			<Link className="navbar-brand" to="/">OpenGallery</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Browse Artworks<span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/">Browse Workshops</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/">Switch to Artist</Link>
					</li>
					{/* <li className="nav-item dropdown">
						<Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown link
						</Link>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<Link className="dropdown-item" to="/">Action</Link>
							<Link className="dropdown-item" to="/">Another action</Link>
							<Link className="dropdown-item" to="/">Something else here</Link>
						</div>
					</li> */}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
