import React, { useState } from "react";


const RegistrationForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleSubmit(e) {
        debugger
        e.preventDefault();
       let userInfo = {
        "username": username,
        "password": password,
        "email": email,
        "first_name": firstName,
        "last_name": lastName
    }

        props.register(userInfo);
    }

    return (
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <label>Last Name</label>
                <input name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <label>Email</label>
                <input name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Username</label>
                <input name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input name="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' >Sign Up!</button>
            </form>
        </div>
    );

}

export default RegistrationForm;