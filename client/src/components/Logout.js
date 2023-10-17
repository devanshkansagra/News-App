import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "applications/json"

            },
            credentials: "include"
        }).then((res) => {
            navigate('/login', {replace: true});
            if(res.status !== 200) {
                const error = new Error("Didn't get the response")
                throw error;
            }
        }).catch((error) => {
            console.log(error); 
        })
    }, [navigate])
    return (
        <></>
    )
}

export default Logout