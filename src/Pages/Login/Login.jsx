import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import flower from './flower.jpg'


const Login = () => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const matn = "absd";
        const parol = "1234"

        const intermatn = text.trim().toLocaleLowerCase();
        const interparol = password.trim().toLocaleLowerCase();

        if(intermatn === matn && interparol === parol){
            alert("Ro'yxatdan o'tdingiz")

            navigate("/home")
            setText("");
            setPassword("");
        }else{
            alert("xato")
        }
        
    }

  return (
    <>
    <div className="login">
        <div className="container">
            <div className="login__container">
                <ul className='login__list'>
                    <li className='login__item'>
                        <h1 className='login__title'>Login</h1>
                        <p className='login__text'>Login and have more fun</p>
                        <Link to="/" className='login__link'><FaHome/> Back to home</Link>
                        <form onSubmit={handleSubmit}>
                            <input className='login__username' 
                            type="text"
                            placeholder='loginni kiriting'
                            value={text}
                            onChange={(e)=>setText(e.target.value)}
                            />
                            <input className='login__password' 
                            type="password"
                            placeholder='parolni kiriting'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                             />
                            <input type="checkbox" />
                            <button type='submit' className='login__btn'>Login</button>
                        </form>
                        <p className='login__textt'>dont have an account? Register</p>
                    </li>
                    <li className='login__img'>
                        <img className='login__imgg' src={flower} alt="surat" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login