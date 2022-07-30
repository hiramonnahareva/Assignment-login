import React, {useState} from 'react';
import './Login.css';
import image from '../../images/Mobile login-amico.png'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



const accessToken = 'QpwL5tke4Pnpja7X4';
const Login = () => {
   const [details, setDetails] = useState({email: '' , password: ''});
   const submitHadler = e => {
    e.preventDefault();
    if (details.email === 'eve.holt@reqres.in' &&   details.password === '5cityslicka'){
   axios.post('https://reqres.in/api/login' , details)
   .then(res => {
    res.send({accessToken})
   })
   .catch(error => {
    toast({error: "missing Password"});
   }) 
   }
 }
    return (
        <div className='container login'>
            <ToastContainer />
            <div className="row d-flex align-items-center">
            <div className="col-lg-4 col-12">
            <h2 className='login-title'>Welcome Back</h2>
            <p>Please login if you already sign up</p>
            <form className='' onClick={submitHadler}>
            <input className="input-field" type="email" onChange={e => setDetails({...details, email: e.target.value})} name='email' placeholder="Email Address *" required/>
            <input className="input-field" type="password"  placeholder="Password *" onChange={e => setDetails({...details, password: e.target.value})} required />
            <input className="submit-btn" value='Login' type="submit" aria-label="default input example"/>
            </form>
            <div className='d-flex justify-content-between mt-2 '>
                <p className='checkbox-container'>
                    <input className='checkbox' type="checkbox" name="" id=""/><span className='text'>Rember Password</span>
                </p>
                <span>Forgot Password?</span>
            </div>
            </div>
            <div className="col-lg-8 d-lg-block d-none">
                <div className="">
            <img src={image} className='w-75 h-100' alt="" />
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;