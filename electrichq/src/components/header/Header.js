

import React from 'react';


const Header = () => {
  return (
    <header class="header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light col-12 ">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="logoImage" width="30" height="24"
                    class="d-inline-block align-text-top rounded-circle">
                ELECTRIC-HQ
            </a>
            <div id="carrito" style="list-style-type: none;" >
                <img src="./images/cart.png" alt="" id="img">
            </div>
            <div id="cantidad" style="list-style-type: none;" class="centrado">
                <p></p>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="pages/products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/community.html">Comunity</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/prototypes.html">Prototypes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/team.html">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    );
}
export default Header;