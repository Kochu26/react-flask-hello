import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/inicio">
				<span className="navbar-brand mb-0 h1">INICIO</span>
			</Link>
			<div className="ml-auto">
				<Link to="/inicio">
					<button className="btn btn-primary">MENU</button>
				</Link>
			</div>
		</nav>
	);
};
