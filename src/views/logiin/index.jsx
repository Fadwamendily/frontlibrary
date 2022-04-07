import React, { useContext } from 'react'
import "./login.css"
import abcd from '../../components/assets/images/abcd.png'
import abcde from '../../components/assets/images/abcde.png'
import { AuthContext } from '../../components/context/AuthContext'

export default () => {

    const { user } = useContext(AuthContext)

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
                                    <input id="email" type="text" className="input100" placeholder="Email" />
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input id="password" type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="flex-sb-m w-full p-t-3 p-b-32">
                                    <div>
                                        <a href="#" className="txt1">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                            </div>
                            {user.role == "Entreprise" ?
                                <div className="login100-more" style={{ backgroundImage: `url(${abcd})` }}>  </div> :
                                <div className="login100-more" style={{ backgroundImage: `url(${abcde})` }}></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
