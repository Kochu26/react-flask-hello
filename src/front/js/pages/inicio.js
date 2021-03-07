import React from "react";
import { Link } from "react-router-dom";

let registro = registro;
alert("Welcome developers");
export const Inicio = () => {
	return (
		<div className="text-center mt-5">
			<Link to="/registro">
				<button className="btn btn-primary">Registro</button>
			</Link>
			<Link to="/iniciar_sesion">
				<button className="btn btn-primary">Iniciar Sesion </button>
			</Link>
			<Link to="/nosotros">
				<button className="btn btn-primary">Nosotros</button>
			</Link>
			<Link to="/contactos">
				<button className="btn btn-primary">Contactos</button>
			</Link>
			<Link to="/miCuenta">
				<button className="btn btn-primary">Mi Cuenta</button>
			</Link>
		</div>
	);
};

console.log(Inicio);
