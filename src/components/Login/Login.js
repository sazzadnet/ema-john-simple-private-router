import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUrl)
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>
                <div className="">---------- OR ----------</div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn-regular"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;