import React from 'react'

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
                                            <div className="lightModeIco"><i class="fa-solid fa-sun"></i></div>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex justify-content-between" onClick={changeToDark}>
                                            <div className="darkMode">Dark</div>
                                            <div className="darkModeIco"><i class="fa-solid fa-moon"></i></div>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Feed" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#login">
                            Login
                        </button>

                        <div class="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Login To your account</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label htmlFor="emailLogin" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="emailLogin" placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="passwordLogin" class="form-label">Password</label>
                                            <input type="email" class="form-control" id="passwordLogin" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#signup">
                            Sign Up
                        </button>

                        <div class="modal fade" id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Signup to your account</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="mb-3">
                                            <label htmlFor="signupFname" class="form-label">First Name</label>
                                            <input type="email" class="form-control" id="signupFname" placeholder="First Name" />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="signUpLname" class="form-label">Last name</label>
                                            <input type="email" class="form-control" id="signUpLname" placeholder="Last Name" />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="signupUname" class="form-label">Username</label>
                                            <input type="email" class="form-control" id="signupUname" placeholder="Username" />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="signupEmail" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="signupEmail" placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="signupPassword" class="form-label">Password</label>
                                            <input type="email" class="form-control" id="signupPassword" placeholder="Password" />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="signupCpassword" class="form-label">Confirm Password</label>
                                            <input type="email" class="form-control" id="signupCpassword" placeholder="Confirm password" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar