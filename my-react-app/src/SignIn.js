import React, {useState} from "react";
import './App.css';
import {Login} from "./Login"
import {Register} from "./Register"


function SignIn () {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm (formName);
    } 

    return (
        <div className="sign-in">
            {
                currentForm === "login" ?  <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
           
        </div>
    )
}

export default SignIn;
