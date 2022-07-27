
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const getuserArr = localStorage.getItem("userdetail");

    const signIn = () => {
        let inpValue = { username, password }
        console.log(inpValue);
        if (username === "") {
            alert("name field is required");
        }
        else if (password === "") {
            alert("password field is required");
        } else if (password.length < 5) {
            alert("password length greater 5");
        }
        else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter(() => {
                    return username && password 
                });

                if (userlogin.length === 0) {
                    alert("invalid details");

                }
                else {

                    console.log("user login successfully");
                    history("/Todo");
                }
            }
        }
    }

    return (

        <div>
            <form>
                <div className="top">
                    <div><p className="proname">Todos</p></div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="topic">
                            <p id="title"><strong>Sign in</strong></p>
                            <div id="main">
                                <input type="email" id="username" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="uname" />
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="pwd" />
                                <div>
                                    <button id="button" onClick={signIn}><b>Sign in</b></button>
                                </div>
                                <div className="direct">
                                    <NavLink to={"/register"}>New here? Register now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>


    )

}
export default Login;

