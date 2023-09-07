import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { useDispatch } from "react-redux";
import { fetchData } from "../../Redux/Post/PostSlice";
import Swal from "sweetalert2";

const Registration = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let api = "http://localhost:1000/bio";
  

  let [inputState, setInputState] = useState({  
    fName: "",
    lName: "",
    email: "",
    contact:"",
    pswd: "",
    isErr:{fName:"",lName:"",email:"",contact:""}
  });
  let valid_c=RegExp('^[+91-]{4}[5-9]{1}[0-9]{9}$');
  let valid_e=RegExp('^([a-z0-9.-]+)@([a-z]{2,15}).([a-z.]{2,10})$');


  let [jsondata, setOld] = useState([]);
  let [show, setShow] = useState("password");

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setOld(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [setOld, api]);
  let toggle = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  let handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    let err= {...inputState.isErr}
    switch (name) {
      case "fName":
        if(value.length<=0){
          err.fName="required field !!!!"
        }else{
          err.fName=""
        }
        break;
        case "lName":
          if (value.length<=0) {
            err.lName="required field !!!!"
          }else{
            err.lName=""
          }
          break;
          case "email":
            if (value.length<=0) {
              err.email="required field !!!!"
            }else if (!valid_e.test(value)){
              err.email="wrong pattern"
            }else{
              err.email=""
            }
            break;
            case "contact":
            if (value.length<=0) {
              err.contact="required field !!!!"
            }else if (!valid_c.test(value)){
              err.contact = "wrong pattern plz use the +91-000000000"
            }else{
              err.contact=""
            }
            break;
            
    
      default:
        break;
    }
    setInputState({ ...inputState, [name]: value, isErr:err });
    console.log("validation error",inputState.isErr);
  };
  let clickSubmit = (e) => {
    e.preventDefault();
    console.log("submittted :", inputState);
    let existingUser = jsondata.filter(
      (data) => data.email.toLowerCase() === inputState.email
    );
    if (existingUser.length > 0) {
      alert("failed");
    } else {
      let data = {
        fName: inputState.fName,
        lName: inputState.lName,
        email: inputState.email,
        contact: inputState.contact,
        password: inputState.pswd,
      };
      dispatch(fetchData(data));
      Swal.fire('You are the member of Doon fitnness GYM')
      navigate("/login");
    }
  };

  return (
    <div className="Reg_page">
      <div className="Form_grp">
        <Container>
          <Row>
            <h1 className="text-center txt">Registration Here</h1>
            <Col className="left_side">
              <form onSubmit={clickSubmit}>
                <div className="parent_inpt">
                  <input
                    type="text"
                    name="fName"
                    onChange={handleChange}
                    required
                  />
                  {inputState.isErr.fName.length > 0 ? <p className="errror"> {inputState.isErr.fName} </p> : "" }
                  <label htmlFor="fname">First Name</label>
                </div>
                <div className="parent_inpt">
                  <input
                    type="text"
                    name="lName"
                    onChange={handleChange}
                    required
                  />{inputState.isErr.lName.length > 0 ? <p className="errror"> {inputState.isErr.lName} </p> : "" }
                  <label htmlFor="lName">Last Name</label>
                </div>
                <div className="parent_inpt">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  {inputState.isErr.email.length>0 ? <p className="errror"> {inputState.isErr.email} </p> : "" }
                  <label htmlFor="email">Email</label>
                  <span required>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <div className="parent_inpt">
                  <input
                    type="text"
                    name="contact"
                    onChange={handleChange}
                    required
                  />{inputState.isErr.contact.length>0 ? <p className="errror"> {inputState.isErr.contact} </p> : "" }
                  <label htmlFor="contact">Contact number</label>
                  <span required>
                    <i className="fa-sharp fa-solid fa-phone "></i>
                  </span>
                </div>
                <div className="parent_inpt">
                  <input
                    type={show}
                    name="pswd"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="pswd">Password</label>
                  <span required>
                    <i
                      onClick={toggle}
                      className="fa-sharp fa-solid fa-eye-slash"
                    ></i>
                  </span>
                </div>
                <input type="submit" value="Register" />

                <p>
                  if you've already account{" "}
                  <Link to={`/login`}>
                    <strong>sign In</strong>
                  </Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Registration;
