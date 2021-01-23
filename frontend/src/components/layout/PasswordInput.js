import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye}/>;

function PasswordInput() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = (e) => {
        setPasswordShown(passwordShown ? false : true);
        if (!passwordShown) {
            e.target.style = 'color: #0077f7'
        } else {
            e.target.style = 'color: white'
        }
    };

    return (
        <>
            <label for="password">Password
                <i className="eye-icon-pw" onClick={togglePasswordVisiblity}>{eye}</i>
            </label>
            <input name="password" type={passwordShown ? "text" : "password"} placeholder="Password" required/>
        </>
    )
}

export default PasswordInput
