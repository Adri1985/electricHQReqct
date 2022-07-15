import React from 'react';

const NavBar = () => {
  return (
   <header >
        <nav >
            <ul>
                <li>
                    products
                </li>
                <li>
                    community
                </li>
                <li>
                    contact
                </li>
                <li>
                    our team
                </li>
            </ul>
        </nav>
    </header>
    /*<header className="header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light col-12 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="/assets/images/logo.png" alt="logoImage" width="30" height="24"
                        className="d-inline-block align-text-top rounded-circle"></img>
                    ELECTRIC-HQ
                </a>
                <div id="carrito" style="list-style-type: none;" >
                    <img src="/assets/images/cart.png" alt="" id="img"></img>
                </div>
                <div id="cantidad" style="list-style-type: none;" className="centrado">
                    <p></p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="pages/products.html">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/community.html">Comunity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/prototypes.html">Prototypes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/team.html">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>*/
    );
}
export default NavBar;