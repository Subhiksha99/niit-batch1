// imr
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSession } from 'react-client-session';

// sfc - stateless functional component
// select text to be modified + (Ctrl+d)

export function Nav(props) {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/counter">Counter</NavLink>
                            </li>
                        </ul>
                        <ul className='navbar-nav ms-auto'>
                            {
                                props.user ?
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                    </li>
                                    :
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/register">Register</NavLink>
                                        </li>
                                    </React.Fragment>

                            }
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

