import React, { useState } from 'react';
import SignUp from '../../Components/SignIn/SignUp';
import './Login.css';

const Login = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    className="loginScreen__logo"
                />
                <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__button">
                    Sign In
                </button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignUp />
                ) : (
                    <>
                        <h1>
                            Unlimited Films, TV Programs and more.
                    </h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className="loginScreen__getStarted">GET STARTED
                            </button>
                            </form>
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}

export default Login
