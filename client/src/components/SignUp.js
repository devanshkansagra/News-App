import React, { useState} from 'react'

function SignUp() {

    
    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    })

    let name, value;
    const handleInputs = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuser({...user, [name]:value});
    }

    const postData = async (event) => {
        event.preventDefault();
        const {firstName, lastName, userName, email, phone, password, cpassword} = user;
    
        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, userName, email, phone, password, cpassword  
                })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
            // Handle success here
        } catch (error) {
            console.error('Error:', error);
            // Handle error here
        }
    }
    return (

        <>
            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#signup">
                Sign Up
            </button>

            <div className="modal fade" id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Signup to your account</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="POST">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="signupFname" className="form-label">First Name</label>
                                    <input type="text" value={user.firstName} className="form-control" id="signupFname" placeholder="First Name" onChange={handleInputs} name="firstName"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signUpLname" className="form-label">Last name</label>
                                    <input type="text" value={user.lastName} className="form-control" id="signUpLname" placeholder="Last Name" onChange={handleInputs} name="lastName"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupUname" className="form-label">Username</label>
                                    <input type="text" value={user.userName} className="form-control" id="signupUname" placeholder="Username" onChange={handleInputs} name="userName"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupPhone" className="form-label">Phone Number</label>
                                    <input type="number" value={user.phone} className="form-control" id="signupPhone" placeholder="Phone Number" onChange={handleInputs} name="phone"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupEmail" className="form-label">Email address</label>
                                    <input type="email" value={user.email} className="form-control" id="signupEmail" placeholder="name@example.com" onChange={handleInputs} name="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupPassword" className="form-label">Password</label>
                                    <input type="password" value={user.password} className="form-control" id="signupPassword" placeholder="Password" onChange={handleInputs} name="password"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupCpassword" className="form-label">Confirm Password</label>
                                    <input type="password" value={user.cpassword} className="form-control" id="signupCpassword" placeholder="Confirm password" onChange={handleInputs} name="cpassword"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp