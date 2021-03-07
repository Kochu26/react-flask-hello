import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";
import { Link } from "react-router-dom";

export const Registro = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Registrarse</h1>
			<label className="form-label">Name</label>
			<p>
				<input className="text" />
			</p>
			<label className="form-label">Last Name</label>
			<p>
				<input className="text" />
			</p>
			<label className="form-label">Email address</label>
			<p>
				<input className="text" />
			</p>
			<label className="form-label">Password</label>
			<p>
				<input className="text" />
			</p>
			<p>
				<Link to="/iniciar_sesion/">
					<button className="btn btn-primary">Enviar</button>
				</Link>
			</p>
		</div>
	);
};
