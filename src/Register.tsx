import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Register() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [matchPwd, setMatchPwd] = useState("");

    const history = useNavigate();
    const [data] = useState([]);

    const register = () => {
        let inputValue = { username, password, matchPwd }
        console.log(inputValue);

        if (username === "") {
            alert("name field is required");
        }
        else if (password === "") {
            alert("password field is required");
        } else if (password.length < 5) {
            alert("password length greater 5");
        }
        else if (matchPwd === "") {
            alert("confpassword field is required");
        } else if (matchPwd.length < 5) {
            alert("confpassword length greater 5");
        }
        else {
            console.log("Register Completed");
            localStorage.setItem("userdetail", JSON.stringify([...data, inputValue]));
            history("/");

        }


    }

    return (

        <div>
            <form>
                <div className="top">
                    <p className="proname">Todos</p>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="topic">
                            <p id="title"><strong>Register for free</strong></p>
                            <div id="main">
                                <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="uname" />
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="pwd" />
                                <input type="password" id="confirm_pwd" value={matchPwd} onChange={(e) => setMatchPwd(e.target.value)} placeholder="Confirm password" className="cpwd" />
                                <div>
                                    <button id="button" onClick={register}><b>Register</b></button>
                                </div>
                                <div className="direct">
                                    <NavLink to={"/"}>Have an account?Login now </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Register;






