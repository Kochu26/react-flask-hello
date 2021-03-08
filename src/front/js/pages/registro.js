import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/index.scss";
import { Link } from "react-router-dom";

export const Registro = () => {
	const [datos, setDatos] = useState({
		nombre: "",
		lastName: "",
		email: "",
		password: "",
		enviar: ""
	});
	const name = event => {
		console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.value]: event.target.value
		});
	};
	const lastName = event => {
		console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.value]: event.target.value
		});
	};
	const email = event => {
		console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.value]: event.target.value
		});
	};
	const password = event => {
		console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.value]: event.target.value
		});
	};
	const send = event => {
		event.preventDefault();
		console.log(datos.nombre + "" + datos.lastName);
	};

	return (
		<div className="text-center mt-5">
			<h1>Registrarse</h1>
			<label className="form-label">Name</label>
			<p>
				<input className="form-label" name="name" onChange={name} />
			</p>
			<label className="form-label">Last Name</label>
			<p>
				<input className="form-label" name="lastName" onChange={lastName} />
			</p>
			<label className="form-label">Email-address</label>
			<p>
				<input className="text" name="email" onChange={email} />
			</p>
			<label className="form-label">Password</label>
			<p>
				<input className="text" name="password" onChange={password} />
			</p>
			<p>
				<Link to="/iniciar_sesion/">
					<button className="btn btn-primary" name="send" onSubmit={send} />
					Send
				</Link>
			</p>
		</div>
	);
};
