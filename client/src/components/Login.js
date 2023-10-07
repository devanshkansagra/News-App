import { React, useState } from 'react'

function Login() {

    // const [login, setlogin] = useState({
    //     email: "",
    //     password: "",
    // })

    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    // let name, value;
    const handleEmail = (e) => {
        email = e.target.value;
        setemail(email);
    }

    function handlePassword (event) {
        password = event.target.value;
        setpassword(password);
    } 

    const loginUser = async (e) => {
        try {
            e.preventDefault();
            const data = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email, password: password
                })
            });

            const response = await data.json();

            if (data.status === 404 || !response) {
                window.alert("Invalid Credentials");
            }
            else {
                window.alert("User Logged in successfully");
            }

        } catch (error) {
            window.alert('User not found');
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    function removeDetails() {
        setemail("")
        setpassword("")
    }


    return (
        <>
            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#login" onClick={removeDetails}>
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
                                    <input type="email" className="form-control" id="emailLogin" placeholder="name@example.com" value={email} onChange={handleEmail} name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordLogin" className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            id="passwordLogin"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handlePassword}
                                            name="password"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>
                                    </div>
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