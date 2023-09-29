import {React, useState} from 'react'

function Login() {

    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");

    const [login, setlogin] = useState({
        email: "",
        password: "",
    })

    let name, value;
    const handleInputs = (event) => {
        name = event.target.name;
        value = event.target.value;

        setlogin({ ...login, [name]: value });
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const data = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                email:login.email, password:login.password
            })
        });

        const response = await data.json();

        if(data.status === 404 || !response) {
            window.alert("Invalid Credentials");
        }
        else {
            window.alert("User Logged in successfully");
        }
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
                        <form method="post">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="emailLogin" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailLogin" placeholder="name@example.com" value={login.email} onChange={handleInputs} name="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordLogin" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="passwordLogin" placeholder="Password" value={login.password} onChange={handleInputs} name="password"/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login