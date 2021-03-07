import React from "react";
import { Link } from "react-router-dom";

export const Contactos = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#{}</th>
					<th scope="col">
						Name
						{}
					</th>
					<th scope="col">
						E-mail
						{}
					</th>
					<th scope="col">
						RRSS
						{}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">#{}</th>
					<td>
						persona
						{}
					</td>
					<td>
						correo
						{}
					</td>
					<td>
						red social
						{}
					</td>
				</tr>
				<tr>
					<th scope="row">#{}</th>
					<td>
						persona
						{}
					</td>
					<td>
						correo
						{}
					</td>
					<td>
						red social
						{}
					</td>
				</tr>
				<tr>
					<th scope="row">#{}</th>
					<td>
						persona
						{}
					</td>
					<td>
						correo
						{}
					</td>
					<td>
						red social
						{}
					</td>
				</tr>
			</tbody>
		</table>
	);
};
