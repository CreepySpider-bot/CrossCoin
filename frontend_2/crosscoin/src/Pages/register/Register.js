import React from 'react'
import { useState } from 'react'
import "./Register.css"
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login ");
			console.log(res.message);
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
        <link href='https://fonts.googleapis.com/css?family=Major Mono Display' rel='stylesheet'></link>
        <Navbar/>
        <div >
            <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
                </div>
            <form onSubmit={handleSubmit}>
                <h3>create an account</h3>

                <label htmlFor="username">e-mail</label>
                <input type="email" placeholder="email" id="email" name="email" onChange={handleChange} value={data.email} required/>

                <label htmlFor="password">password</label>
                <input type="password" placeholder="password" id="password" name="password" onChange={handleChange} value={data.password} required/>

                <button type='submit'>create account</button>
                <span className='already'>already have an account? <Link to='/login'>log in</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Register
