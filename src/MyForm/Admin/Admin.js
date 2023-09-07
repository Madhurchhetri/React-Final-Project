import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Admin = () => {
  let api_url = "http://localhost:1000/bio";
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let adminToken = window.sessionStorage.getItem("adminId")
  
  let fetchData=()=>{
    axios
    .get(api_url)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
  }
  useEffect(() => {
   fetchData();
  }, [setData, api_url]);
  let deleteUser=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:1000/bio/${id}`).then(res=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
      fetchData();
    }).catch(err=>{
      console.log("axios delete error", err);
    })
        
      }
    })
    
  }
  let adminLogout=()=>{
    window.sessionStorage.removeItem("adminId");
    navigate('/adminLogin')
  }
  return (
    <div className="usr">
      <Container>
        <Row>
        <div className="admin-heading">
        <h1 className="text-center my-5">Trainee Details</h1>
        <span><i class="fa-solid fa-user"></i>
         { adminToken ?  <button onClick={adminLogout} className="ms-2">LOGOUT</button> : null }
        
        </span>
        </div>
          <table>
            <tr>
            <th>S.NO.</th>
              <th>name</th>
              <th>email</th>
              <th>Contact no.</th>
              <th>password</th>
              <th>Remove</th>
            </tr>
            {data.map((usr) => (
              <tr key={usr.id} >
              <td>{usr.id}.</td>
                <td>
                  {usr.fName}
                  {usr.lName}
                </td>
                <td>{usr.email}</td>
                <td>{usr.contact}</td>
                <td>{usr.password}</td>
                <td><button onClick={()=>{deleteUser(usr.id)}}>Remove</button></td>
              </tr>
            ))}
          </table>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
