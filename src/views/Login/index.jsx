import React, { useContext, useState } from 'react'
import './login.css'
import { AuthContext } from '../../components/context/AuthContext';
import AuthService from '../../components/services/AuthService';
import abcd from '../../components/assets/images/abcd.png'

export default function Login(props) {
    const { setUser, setIsAuth } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);

    function handleInput(event) {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value })
    }
    function handleLogin(event) {
        event.preventDefault();
        AuthService.login(userInfo).then(jsonData => {
            const { isAuthenticated, user } = jsonData;
            setUser(user);
            setIsAuth(isAuthenticated);

            if (isAuthenticated) {
                if (props.location.state)
                    props.history.replace(props.location.state.from.pathname)
                else
                    props.history.replace("/home")
            }

        })
    }

    return (
        
        <div>
            <div style={{ marginTop: '100px' }}  >
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form validate-form">
                                <span className="login100-form-title p-b-43">
                                    Login to continue
                                </span>
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input id="email" type="text" onChange={handleInput} className="input100" placeholder="Email" />
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                             <input id="password" type="password" onChange={handleInput} className="form-control" placeholder="Password" />
                                </div>
                                <div className="flex-sb-m w-full p-t-3 p-b-32">
                                    <div>
                                        <a href="#" className="txt1">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button onClick={handleLogin} className="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="login100-more" style={{ backgroundImage: `url(${abcd})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}