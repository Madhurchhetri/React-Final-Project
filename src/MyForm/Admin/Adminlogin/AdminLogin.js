import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from 'sweetalert2';

const AdminLogin = () => {
    let adminApi="http://localhost:2000/admin"
    let navigate=useNavigate()
    let [inputData,setInputData]=useState({email:"",password:""})
    let [json,setJsonOld]=useState([]);
    let [show,setShow]=useState("password");
    useEffect(()=>{
        axios.get(adminApi).then((res)=>{
            setJsonOld(res.data)
        }).catch((err)=>{
            alert("api error",err)
        })
    },[setJsonOld,adminApi]);
    let toggle =()=>{
        if (show === "password") {
            setShow("type")
        }else{
            setShow("password")
        }
    }
    let handleChange=(event)=>{
        event.persist()
        let {name,value}=event.target 
        setInputData({...inputData,[name]:value});
    }
    let clickSubmit=(event)=>{
        event.preventDefault();
        let exixistingUser = json.find((data)=>data.email===inputData.email && data.password===inputData.password)
        console.log("matched",exixistingUser);
        if (exixistingUser) {
            window.sessionStorage.setItem("adminId",exixistingUser.email)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Hii Admin Have A Nice Day',
                showConfirmButton: false,
                timer: 1500
              })
            navigate("/admin")
        }else{
            alert("failed")
        }
    }
  return (
    <div className='login_page'>
    <div className='form_grp'>
        <Container>
            <Row>
            <h1 className='text-center txt'>Admin Login Here</h1>
                <Col className='left_side'>
                    <form onSubmit={clickSubmit}>
                    <div className='inpt_box'>
                        <input type="text" name='email'  onChange={handleChange} required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='inpt_box'>    
                        <input type={show} name='password'  onChange={handleChange} required/>
                        <label htmlFor="password">Password</label> 
                        <span required>
                        {show==="password"?<i
                      onClick={toggle}
                      className="fa-sharp fa-solid fa-eye-slash fa-flip"></i> : <i
                      onClick={toggle}
                      className="fa-sharp fa-solid fa-eye fa-flip"
                    ></i>}
                  </span>
                    </div>
                        <input type="submit" value="login"  />
                    </form>
                    
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

export default AdminLogin