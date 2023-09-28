import {React, useState} from 'react'

function Login() {

    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");

    const [login, setlogin] = useState({
        email: "",
        password: "",
    })

    let name, value;
    function handleInputs(event) {
        name = event.target.name;
        value = event.target.value;

        setlogin(...login, {[name]:value});
    }
    return (
        <>
            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#login">
                Login
            </button>

            <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Login To your account</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="/login" method="post">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="emailLogin" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailLogin" placeholder="name@example.com" value={login.email} onChange={handleInputs} name="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordLogin" className="form-label">Password</label>
                                    <input type="email" className="form-control" id="passwordLogin" placeholder="Password" value={login.password} onChange={handleInputs} name="password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login