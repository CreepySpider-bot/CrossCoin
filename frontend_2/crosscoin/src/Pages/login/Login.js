import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
function Login() {

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/main";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <div>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Major Mono Display' rel='stylesheet'></link>
        <Navbar/>
        <div >
            <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
                </div>
            <form onSubmit={handleSubmit}>
                <h3>login to your account</h3>

                <label htmlFor="username">e-mail</label>
                <input type="email" placeholder="email" id="email" name="email" onChange={handleChange} value={data.email} required/>

                <label htmlFor="password">password</label>
                <input type="password" placeholder="password" id="password" name="password" onChange={handleChange} value={data.password} required/>

                <Link to='/main'><button>login</button></Link>
                
        </form>
        </div>
    </div>
    </div>
  )
}

export default Login
