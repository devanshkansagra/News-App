import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom'

function Navbar(props) {

    let [search, setsearch] = useState("")

    function handleSearch(e) {
        search = e.target.value;
        setsearch(search);
    }
    function changeToDark() {
        document.body.setAttribute("data-bs-theme", "dark");
    }
    function changeToLight() {
        document.body.setAttribute("data-bs-theme", "light");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand">Dailyscope News</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collprops.categoryapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science & Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education">Education</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Change Theme
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex justify-content-between" onClick={changeToLight}>
                                            <div className="lightMode">Light</div>
                                            <div className="lightModeIco"><i className="fa-solid fa-sun"></i></div>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex justify-content-between" onClick={changeToDark}>
                                            <div className="darkMode">Dark</div>
                                            <div className="darkModeIco"><i className="fa-solid fa-moon"></i></div>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch}/>
                                <button className="btn btn-outline-success" type="submit" onClick={props.getNews}>Search</button>
                        </form>

                        {/* Login Form Modal */}
                        <Login />
                        {/* Signup form modal */}
                        <SignUp />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar