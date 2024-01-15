import React, {useState} from "react";

export const Login = (props) => {
    const  [email, setEmail] = useState('');
    const [pass, setPass] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (

            <div className="auth-form-container">
                <h2>Log In</h2>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button className="log-in-button">Log In</button>
            </form>
            <div className="return">
                <button  className="link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register Here!</button>
            </div>
            </div>
    )
}