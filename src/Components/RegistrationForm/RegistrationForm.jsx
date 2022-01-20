import React, { useState } from "react";

const RegistrationForm = (props) => {

    const [state, setState] = useState({first_name: "", last_name: "", username: "", email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="log-in">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' >Sign Up!</button>
            </form>
        </div>
    );

}

export default RegistrationForm;