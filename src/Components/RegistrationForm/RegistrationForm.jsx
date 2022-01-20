import React, { useState } from "react";


const RegistrationForm = (props) => {

    const [state, setState] = useState({ username: "", password: "", email: "", first_name: "", last_name: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setState(lastState => ({
            ...lastState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        debugger
        e.preventDefault();
        props.Register(username, password, email, first_name, last_name);
    }

    return (
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input name="first_name" value={state.first_name} onChange={handleChange}></input>
                <label>Last Name</label>
                <input name="last_name" value={state.last_name} onChange={handleChange}></input>
                <label>Email</label>
                <input name="email" type='email' value={state.email} onChange={handleChange}></input>
                <label>Username</label>
                <input name="username" value={state.username} onChange={handleChange}></input>
                <label>Password</label>
                <input name="password" type='password' value={state.password} onChange={handleChange}></input>
                <button type='submit' >Sign Up!</button>
            </form>
        </div>
    );

}

export default RegistrationForm;