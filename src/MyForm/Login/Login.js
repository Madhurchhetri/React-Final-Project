import React, { useState,useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { useDispatch,useSelector } from 'react-redux';
import { loginData } from '../../Redux/Post/PostSlice';
import Swal from 'sweetalert2';

const Login = () => {
    let {total,fName,lName} = useSelector(state=>state.data)
    console.log("total data ",total);
    let dispatch=useDispatch();
    let navigate=useNavigate()
    let[inputData,setInputData]=useState({email:"",pswd:""})
    let[show , setShow] =useState("password")
    useEffect(()=>{
        dispatch(loginData())
       },[])
    let handleChange=(e)=>{
        e.persist();
        let{name,value}=e.target;
        setInputData({...inputData,[name]:value})
    }
    let toggle=()=>{
        if (show === "password") {
            setShow("text")
        }else{
            setShow("password")
        }
    }
    let clickSubmit=(e)=>{
        e.preventDefault();
        let exixistingUser=total.find((item)=>item.email===inputData.email && item.password===inputData.pswd)
        console.log("successfully",exixistingUser);
        if (exixistingUser) {
            window.sessionStorage.setItem("userid",exixistingUser.id)
            window.sessionStorage.setItem("Fname",exixistingUser.fName)
            window.sessionStorage.setItem("Lname",exixistingUser.lName)
            window.sessionStorage.setItem("Email",exixistingUser.email)
            Swal.fire('Login successfully')
            navigate('/')
        }else{
            alert("failed")
        }
    }
  return (
    <div className='login_page'>
    <div className='form_grp'>
        <Container>
            <Row>
            <h1 className='text-center txt'>Login Here</h1>
                <Col className='left_side'>
                    <form onSubmit={clickSubmit}>
                    <div className='inpt_box'>
                        <input type="text" name='email'  onChange={handleChange} required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='inpt_box'>    
                        <input type={show} name='pswd'  onChange={handleChange} required/>
                        <label htmlFor="pswd">Password</label> 
                        <span required>
                    {show==="password"?<i
                      onClick={toggle}
                      className="fa-sharp fa-solid fa-eye-slash"></i> : <i
                      onClick={toggle}
                      className="fa-sharp fa-solid fa-eye"
                    ></i>}
                  </span>
                    </div>
                        <input type="submit" value="login"  />
                    </form>
                    <p>create an Account <Link to={`/registration`}><strong>SignUp</strong></Link> </p>
                </Col>
                 <Col className="right_side">
            <figure>
              <img className="img-fluid" src="../../../../assets/login4.gif" alt="registration" />
            </figure>
          </Col>
            </Row>
        </Container>
    </div>
    </div>
  )
}

export default Login