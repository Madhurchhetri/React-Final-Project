import React from 'react'
import { Link } from 'react-router-dom';


const OrderDetail = () => {
    let tokenId = window.sessionStorage.getItem("userid");
    let fname = window.sessionStorage.getItem("Fname");
    let lname = window.sessionStorage.getItem("Lname");

  return (
    <div className='mainparent2'>
{tokenId && <div className='order-detail'>
    <h3> Name : {fname} {" "} {lname}</h3>
    <h5>Sir Your order has been placed</h5>
    
    <button >Continue Shopping</button>
    
</div>
}
    </div>
  )
}

export default OrderDetail