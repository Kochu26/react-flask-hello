import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Inicio } from "./pages/inicio";
import { Registro } from "./pages/registro";
import { Iniciar_Sesion } from "./pages/iniciar_sesion";
import { MiCuenta } from "./pages/micuenta";
import { Contactos } from "./pages/contactos";
import { Nosotros } from "./pages/nosotros";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/inicio">
							<Inicio />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/iniciar_sesion">
							<Iniciar_Sesion />
						</Route>
						<Route exact path="/micuenta">
							<MiCuenta />
						</Route>
						<Route exact path="/contactos">
							<Contactos />
						</Route>
						<Route exact path="/nosotros">
							<Nosotros />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
