
import React from 'react';

class Menu extends React.Component {

	render() {

		return (

			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

				<a className="navbar-brand" href="#">Mi Proyecto</a>
				<button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse d-flex" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Nosotros</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Servicios</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contacto</a>
						</li>
					</ul>
				</div>
				<div>
					<form className="d-flex justify-content-end">
						<input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar" />
						<button className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Buscar</button>
					</form>
				</div>

			</nav>

		)

	}

}

export default Menu;