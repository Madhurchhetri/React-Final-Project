import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link,  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


const Header = () => {
  let [oldSticky,setSticky] = useState("main_menu");
  window.onscroll = () => {
      let temp;
      let top = window.scrollY;
      if (top > 30 ) {
        temp = "main_menu sticked"
      }else{
        temp = "main_menu"
      }
      return setSticky(temp);
  }
  let navigate = useNavigate();
    let tokenId = window.sessionStorage.getItem("userid");
    let fname = window.sessionStorage.getItem("Fname")
    let lname = window.sessionStorage.getItem("Lname")
    let Emails = window.sessionStorage.getItem("Email")
    let handleLogOut =()=>{
      window.sessionStorage.clear();
      Swal.fire(`You've Logged out succefully`)
      navigate('/')
    }
    // let [cartItems,setCartItems] = useState([])
    // let[quantity,setQuantity]=useState(0)
    // let fetchCartData =  () =>{
    //   axios.get(`http://localhost:3001/Carts?email=${Emails}`).then(res=>{
    //     console.log("perticular data ",res);
    //     setCartItems(res.data)
        
    //   })
    //   .catch(err=>{
    //     console.log("axios log err ",err);
        
    //   })
      
    // }
    // console.log("variable cartItems ",cartItems);
    
    // useEffect(()=>{
    //   fetchCartData()
     
    // },[])
    // let handleQuantity=()=>{
    //   let ans=0;
    //   cartItems.map((prod)=>{
    //     ans += prod.quantity 
    //   })
    //   setQuantity(ans);
    // }
    // useEffect(()=>{
    //   handleQuantity();
    // })

  return (
    <>
    
    <Navbar expand="lg"  className={oldSticky} data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand as={Link} to="/" className='logoDiv'>
        <img src="../../../../assets/Doon7.png" alt="logo" className='logoImg' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fs-5 fw-bold list">
          <Nav.Link as={Link} to="about" >ABOUT US</Nav.Link>
          <Nav.Link  as={Link} to="service" > SERVICES </Nav.Link>
          <Nav.Link as={Link} to="gymproduct" >PRODUCTS</Nav.Link>
          <Nav.Link as={Link} to="contact" >CONTACTS</Nav.Link>
          {tokenId ? <Nav.Link onClick={handleLogOut} className='mx-3'>LOGOUT</Nav.Link> :
          <>
          <Nav.Link as={Link} to="login" >LOGIN</Nav.Link>
          </>
            }
          
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        {
          tokenId && <div className='profileName'>
          <span className='me-1 icon'><i className="fa-solid fa-user "></i></span>
          <div>
            {fname.toUpperCase()}{" "}{lname.toUpperCase()}
            </div>
            {/* <div>
              <span><i className="fa-solid fa-cart-shopping">{quantity}</i></span>
            </div> */}
          </div>
        }
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
 
  </>
  )
}

export default Header