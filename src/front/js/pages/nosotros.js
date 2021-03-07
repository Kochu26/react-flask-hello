import React from "react";
import { Link } from "react-router-dom";

export const Nosotros = () => {
	return (
		<div className="text-center mt-5">
			<Link to="/inicio/">
				<button className="btn btn-primary">Entrar</button>
			</Link>
		</div>
	);
};
