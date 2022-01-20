import React, { useState } from "react";

const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <button type='submit' >Login</button>
            </form>
        </div>
    );

}

export default LoginForm;