import React from "react";
import { Link } from "react-router-dom";

export const Iniciar_Sesion = () => {
	return (
		<div className="text-center mt-5">
			<h1>Iniciar Sesion</h1>
			<p>
				<input className="e-mail" type="e-mail" placeholder="E-mail" />
			</p>
			<p>
				<input className="password" type="Password" placeholder="Password" />
			</p>
			<p>
				<input className="token" type="token" placeholder="Token" />
			</p>
			<p>
				<Link to="/micuenta/">
					<button className="btn btn-primary">Entrar</button>
				</Link>
			</p>
		</div>
	);
};
