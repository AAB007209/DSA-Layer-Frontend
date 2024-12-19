import React, { useState } from 'react';
import "../components/Login.css";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="login">
            <div className="login-form">
                <h2 className="welcome-heading">
                    Welcome back to <span className="highlight">DSA Layer</span>
                </h2>
                <div className="form-container">
                    <form action='POST' onSubmit={handleSubmit}>
                        <h2 className="form-title">Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-login">Login</button>
                        </div>
                        <p className="register-link">
                            Don't have an account? <a href="#">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;