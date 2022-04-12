import React from 'react';
//import './Slider.css';

class Servicios extends React.Component {

    render() {

        return (

            <div className="container servicios">

                <div className="row">

                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>
                        <h2>Servicio 1</h2>
                        <p>Redes Sociales</p>
                        <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                    </div>

                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>
                        <h2>Servicio 2</h2>
                        <p>Marketing Digital</p>
                        <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                    </div>

                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>
                        <h2>Servicio 3</h2>
                        <p>Diseño Web</p>
                        <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                    </div>

                </div>

            </div>

        )

    }

}

export default Servicios;
