import React, { Suspense } from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import Home from '../Component/Home/Home'
import About from '../Component/About/About'
import Service from '../Component/Service/Service'
import SubExercise from '../Component/SubExercise/SubExercise'
// import SingleExercise from '../Component/SingleExercise/SingleExercise'
import Contact from '../Component/Contact/Contact'
import Registration from '../MyForm/Registration/Registration'
import Login from '../MyForm/Login/Login'
import Admin from '../MyForm/Admin/Admin'
import ProtectRouting from '../Protect/ProtectRouting'
import Pnf from '../Layout/PNF/Pnf'
import Error from '../Error/Error'
import GoTopButton from '../Layout/GoTopButton/GoTopButton'
import Abhishek from '../Component/Gym/Trainers/Abhishek'
import MukeshSie from '../Component/Gym/Trainers/MukeshSie'
import ALiBilal from '../Component/Gym/Trainers/ALiBilal'
import AdminLogin from '../MyForm/Admin/Adminlogin/AdminLogin'
import './ROuting.css'
import ErrorAdmin from '../MyForm/Admin/ErrorAmin/ErrorAdmin'
import ProtectRoutingAdmin from '../Protect/ProtectRoutingAdmin'
import OrderDetail from '../Products/OrderDetail'
import GymProducts from '../Products/GymProducts'
import GymProductDetail from '../Products/GymProductDetail'
import Cart2 from '../Products/Cart2'
import Spinner from 'react-bootstrap/Spinner';



const SingleExercise = React.lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(import('../Component/SingleExercise/SingleExercise')),2000)
  })
})

const RootRouting = () => {
  return (
    <Router>
    <Header/>
    <Suspense  fallback= { <div style={{height:"100vh" , display:"flex", justifyContent:"center",alignItems:"center"}}>
      <Spinner animation="border" variant="dark" />
    </div>}>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>} />
            <Route path='service' element={<Service/>}/>
            <Route path='service/subservice/:subId' element={<SubExercise/>}/> 
            <Route path='service/subservice/:subId/single/:sgId' element={<SingleExercise/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='registration' element={<Registration/>}/>
            <Route path='login' element={<Login/>}/>

            <Route path='adminLogin' element={<AdminLogin/>}/> 
            <Route element={<ProtectRoutingAdmin/>}>
            <Route path='admin' element={<Admin/>}/>
            </Route>
            

            <Route element={<ProtectRouting/>}>
            
            <Route path='orderdetail' element={<OrderDetail/>}/>
            
            
            <Route path='cartItem' element={<Cart2/>}/>
            </Route>
            <Route path='gymproduct/gymProdDetail/:gid' element={<GymProductDetail/>}/>
            <Route path='gymproduct' element={<GymProducts/>}/>
            
            

            <Route path='abhi' element={<Abhishek/>}/>
            <Route path='guru' element={<MukeshSie/>}/>
            <Route path='ali' element={<ALiBilal/>}/>

            <Route path='error' element={<Error/>}/>
            <Route path='error2' element={<ErrorAdmin/>}/>
            <Route path='*' element={<Pnf/>}/>
        </Routes>
        <GoTopButton/>
        </Suspense>
        <Footer/>
    </Router>
  )
}

export default RootRouting