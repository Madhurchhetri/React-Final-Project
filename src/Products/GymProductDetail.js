import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductJson from "./Product.json";
import { Col, Container, Row } from "react-bootstrap";
import FormatPrice from "./Helper/FormatPrice";
import { Link } from "react-router-dom";
import "./Cart.css";
import Cart2 from "./Cart2";
import axios from "axios";

const GymProductDetail = () => {
  let api = "http://localhost:3001/Carts";
  let [inputData, setInputData] = useState({ email: "" });
  let Emails = window.sessionStorage.getItem("Email");
  const [cart, setCart] = useState([]);
  let navigate = useNavigate();
  let { gid } = useParams();
  let singleProduct = ProductJson.products.find((data) => data.id == gid);
  // console.log("single product",singleProduct);

  let [warning, setWarning] = useState(false);
  let fetchdata = () => {
    axios
      .get(api)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  let handleChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  let handleClick = (singleProduct) => {
    console.log("item :", singleProduct);
    let postProd = {
      // id:singleProduct.id,
      title: singleProduct.title,
      price: singleProduct.price,
      desc: singleProduct.desc,
      image: singleProduct.image,
      quantity: singleProduct.quantity,
      email: Emails,
    };
    let matchingData = cart.filter(
      (data) => data.title === singleProduct.title && data.email===Emails) ;
    console.log("data match ", matchingData);
    if (matchingData.length===0) {
     axios.post(api,postProd)
     .then(res=>{
        console.log("Cart post data Axios ",res)
     })
     .catch(err=>{
        console.log("Cart post axios error ",err);
     })
       
    } else {
        alert("this items already added");
    }
    // let cartDataParams = JSON.stringify(cart);
    // navigate(`/cartItem/${encodeURIComponent(cartDataParams)}`);
    // navigate("/cartItem")
    
  };
  return (
    <>
      <div className="gym-products">
        <Container>
          <Row>
            <Col>
              <div>
                <figure>
                  <img
                    src={singleProduct.image}
                    alt="singleProduct"
                    className="single-image"
                  />
                </figure>
              </div>
            </Col>
            <Col>
              <div className="single-product-content">
                <h2>{singleProduct.title}</h2>
                <p>{singleProduct.desc}</p>
                <p>Price : {<FormatPrice price={singleProduct.price} />}</p>
                {/* <input type="text" name='email' placeholder='enter your email' onChange={handleChange}/> */}
                <Link to={`/cartItem`} onClick={() => handleClick(singleProduct)}>
                <button>
                  ADD TO CART
                </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Cart2 cartData={cart}/> */}
    </>
  );
};

export default GymProductDetail;
