import React, { useState } from 'react';
import Register  from './Register';
import { Link, useHistory } from 'react-router-dom';
import  { auth } from './firebase'

function Login() {
    const history = useHistory("");
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const login =(event) =>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            history.push('/')
        }).catch((e)=>{
            if(
                e.message === "The password is Invalid or the user does not have a password"
            ){
                alert("please check your credential again");
            }

            else if (
                e.message === "There is no user corrosponding to this indentifier.The user may have delete"
            )
            {
                alert("please check your credentials again");
            }
        
             else{
                alert(e.message);
            }

        });

    }
  return (
    <div className="login">
    
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login_logo"/>
            <div className="login_Container">
                <center>
                <h3>Login FaceBook</h3>
                </center>
                <form>
                    <center>
                        <input type="email" placeholder="Email Adress" onChange={(e) => setEmail(e.target.value)} />
                        </center>
                        <center>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </center>
                        <center>
                        <button type="submit" className="login_login"> Log In
                            
                        </button>
                        </center>
                        <center>
                            <div className="sideInfo">
                                <h5>Forgetten password ?</h5>   
                                <h5 className="dot">.</h5>
                                <Link to="/register" style={{textDecoration:'none'}}>
                                    <h5 className="rtd">SignUp for faceBook</h5>
                                </Link>

                            </div>
                        </center>
                
                </form>


            </div>
    </div>
  )
}

export default Login
