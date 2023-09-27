import React from 'react'
import Login from './Login';
import SignUp from './SignUp';

function Navbar() {

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
                    <a className="navbar-brand" href="/">News App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/science">Science & Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fashion">Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/politics">Politics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/education">Education</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Change Theme
                                </a>
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