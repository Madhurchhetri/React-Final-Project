import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import FormatPrice from './Helper/FormatPrice';
import axios from 'axios';
import './Cart.css';
import Scrollbars from 'react-custom-scrollbars-2';
const Cart2 = () => {
  
  // let {itemData}=useParams()
  let Emails = window.sessionStorage.getItem("Email")
  // const AllProd = JSON.parse(decodeURIComponent(itemData))
    // console.log("cart-items :",AllProd);
let [cartItems,setCartItems] = useState([])
    const [price , setPrice]=useState(0)
    let[quantity,setQuantity]=useState( 1);
    let api = 'http://localhost:3001/Carts'
      

let fetchCartData =  () =>{
  axios.get(`http://localhost:3001/Carts?email=${Emails}`).then(res=>{
    console.log("perticular data ",res);
    setCartItems(res.data)
    
  })
  .catch(err=>{
    console.log("axios log err ",err);
    
  })
  
}
console.log("variable cartItems ",cartItems);

useEffect(()=>{
  fetchCartData()
 
},[])
//     let fetchData=()=>{
//       axios.get(api).then((res)=>{
//         setDataItem(res.data)
//       }).catch((err)=>{
//         console.log("err",err);
//       })
//     }
//     useEffect(()=>{
//       fetchData();
//       console.log("data items in all cart prod",dataItem);

//     },[])
// useEffect(()=>{
//   let matchData=dataItem.filter((data)=>data.email===Emails);
//   console.log("match data :",matchData);
 
   
//       setMatchItem(matchData)
   
  
// },[])
    

    let handlePrice=()=>{
      let ans=0;
      cartItems.map((prod)=>{
        ans += prod.quantity * prod.price 
      })
      setPrice(ans);
    }
    useEffect(()=>{
      handlePrice();
    })

let incriment=(id)=>{
  let update = [...cartItems] 
   console.log("incri :", update);
  let newCart = update.map((currElem)=>{
    if (currElem.id===id){
      return {...currElem, quantity: currElem.quantity+1}
    }else{
      return currElem
    }
  })
  setCartItems(newCart)
}
let decriment=(id)=>{
  let updateDecri = [...cartItems]
  console.log("decri :", updateDecri);
  let newCartdecri = updateDecri.map((currelem)=>{
    if (currelem.id === id){
      return {...currelem, quantity: Math.max(1, currelem.quantity - 1)}
    }else{
      return currelem
    }
  })
  setCartItems(newCartdecri)
}
let removeItem =(id)=>{
    axios.delete(`http://localhost:3001/Carts/${id}`).then((res)=>{
        fetchCartData();
    }).catch((err)=>{
      console.log("delete-error:",err);
    })
}
let handleQuantity=()=>{
  let ans=0;
  cartItems.map((prod)=>{
    ans += prod.quantity 
  })
  setQuantity(ans);
}
useEffect(()=>{
  handleQuantity();
})
    
  return (
    <>

    
    <article className='cart-article'>
    <Container >
    <div className='cart-heading'>
    <Link to={`/gymproduct`}>
    <h4>Continue shopping</h4>
    </Link>
    <div>
    <span><i class="fa-solid fa-cart-shopping"> <strong>{quantity}</strong></i></span>
    </div>
    </div>
     
      <Row>
      <div className='cart-container'>
      <Scrollbars style={{width:"100%" , height:"400px" }}>
      {
       
          cartItems.map((data)=>(
            <div key={data.id} className='itemData'>
              <Col>
                <figure>
                  <img src={data.image} alt="" className='itemImg' />
                </figure>
              </Col>
              <Col>
                <h4 >{data.title}</h4>
              </Col>
              <Col>
              <div className='itemBtn'>
                <button onClick={()=>incriment(data.id)} className='incri'>+</button>
                <button>{data.quantity}</button>
                <button onClick={()=>decriment(data.id)} className='decri'>-</button>
                </div>
              </Col>
              <Col>
                <h5><FormatPrice price = {data.quantity*data.price}/></h5>
              </Col>
              <Col>
              <span><i className="fa-solid fa-trash" onClick={()=>removeItem(data.id)}></i>{" "}Remove Item</span>
              </Col>
              </div>
            ))  
          }
          </Scrollbars>
          </div>
          <div className='my-5 cart-total'>
            <span>total price of your cart </span>
            <span><FormatPrice price={price}/></span>
          </div>
      </Row>
    </Container>
         
    </article>
    </>
  )
}

export default Cart2