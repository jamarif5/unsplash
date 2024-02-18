import React from 'react'
import  "./navbar.scss";
import {FaSearch} from "react-icons/fa"
function Navbar() {
  return (
   <>
   <div className='container'>
 <img src={require("../../../asscit/images/logo.png")} alt="" />
   <form>
<FaSearch/>
<input type="text"required />

   </form>
   <span>Advetise</span>
<span>service</span>
<span>home</span>
<span>contect</span>
<span>About</span>
 </div>
   </>
   
  )
}

export default Navbar