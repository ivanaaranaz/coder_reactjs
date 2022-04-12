
import React from 'react';


class Footer extends React.Component {

  render() {

    return (

      <footer className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-center">

        <p className="nav-item text-light">&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a>
          &middot; <a href="#">Términos</a></p>
      
      </footer>

    )

  }

}

export default Footer;