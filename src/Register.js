import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import {useState} from 'react'
import "./Register.css"
import {auth, db} from './firebase.js'

// rfce
function Register() {

 const history= useHistory("");
 const [firstName, setFirstname]= useState("");
 const [lastName, setLastname]= useState("");
 const [email, setEmail]= useState("");
 const [password, setPassword]= useState("");
 const [birthday, setBirthday]= useState([]);
 const [gender, setGender]= useState("");
 

  const register = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {

      if(auth.user){
        auth.user.updateProfile({

          displayName: firstName+ " " + lastName,
          photoURL:"https://ibb.co/M6CRm5Y"


        }).then((s) => {
          db.collection('users').doc(auth.user.uid).set({
            uid: auth.user.uid,
            displayName:auth.user.displayName,
            email:auth.user.email,
            photoURL:"https://ibb.co/M6CRm5Y",
            birthday,
            gender,
            bio:""
          })
        }) 
      }
    })
  }

  return (
    <div className="register">
      <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login_logo"/>
      <div className="register_container">
      <h3>Sign Up</h3>
      <p>Its quick and easy !</p>
       <div className="hr3" />
       <form>
         <div className="row">
           <input 
              onChange={(e)=>{
                setFirstname(e.target.value);
              }}
               className="register_name" type="name" placeholder="FirstName" required
              />
            <input 
              onChange={(e)=>{
                setLastname(e.target.value);
              }}
               className="register_name" type="name" placeholder="LastName" required
              />
         </div>
         <center>
         <input 
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
               className="register_name" type="email" placeholder="Email"
              />

        
         </center>        
          <center>
         <input  required
              onChange={(event)=>{
                setPassword(event.target.value);
              }}
               className="register_name" type="password" placeholder="New Password"
              />
         </center>
         <h5 className="register_date">Date of Birth</h5>
         <select className="register_date2" onChange={(e)=>setBirthday([...birthday,e.target.value])}>
      
           
           <option value="Day">Day</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
          
         </select>

         <select className="register_date3" onChange={(e)=>setBirthday([...birthday,e.target.value])}>     
           <option value="Month">Month</option>
           <option value="1">Jan</option>
           <option value="2">Feb</option>
           <option value="3">Mar</option>
           <option value="4">Apr</option>
           <option value="5">May</option>
           <option value="6">Jun</option>
           <option value="7">July</option>
           <option value="8">Aug</option>
           <option value="9">Sep</option>
           <option value="10">Oct</option>
           <option value="11">Nav</option>
           <option value="12">Dec</option>
          
         </select>

         
         <select className="register_date3" onChange={(e)=>setBirthday([...birthday,e.target.value])}>     
           <option value="Year">Year</option>
           <option value="1">2020</option>
           <option value="2">2019</option>
           <option value="3">2018</option>
          
         </select>
        <h5 className="register_gender">
                Gender
        </h5>
        
        <div className="register_radiocontainer">
          <div className="wrapper">
            <label>Female</label>
            <input type="radio" onChange={(e)=> setGender(e.target.value)} name="gender" value="Female"/>
          </div>

          <div className="wrapper">
            <label>Male</label>
            <input type="radio" onChange={(e)=> setGender(e.target.value)}name="gender" value="Male" />
          </div>

          <div className="wrapper">
            <label>Others</label>
            <input type="radio" onChange={(e)=> setGender(e.target.value)} name="gender" value="Others" />
          </div>

        </div>
        <p className="register_policy">
           By clicking sign Up , You agree to our {" "}
           <span>
             Terms, Date policy
           </span> and <span>
             Cookies Policy
           </span>
        </p>
        <center>
          <button onClick={ register }  type="submit" className="register_register">
                Sign Up
          </button>
        </center>
        <center>
          <Link to="/login">
            <h4 className="register_login">Already have an account</h4>

          </Link>
        </center>
       </form>
      </div>
    </div>
  )
}

export default Register
