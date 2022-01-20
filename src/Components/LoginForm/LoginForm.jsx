import React, { useState } from "react";

const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        debugger
        e.preventDefault();
        props.login(username, password);
    }

    return (
        <div className="log-in">
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' >Login</button>
            </form>
        </div>
    );

}

export default LoginForm;