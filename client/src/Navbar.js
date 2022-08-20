import {Link} from "react-router-dom";
import {BiMenu} from 'react-icons/bi'; //menu
import {IoMdClose} from 'react-icons/io';//menu close
import { useState } from "react";
import style from "./Navbar.module.css"

// RiEyeCloseFill
// ImEye

const Navbar = () => {

  const [menubar, setMenubar] = useState(false);
 return ( 

  <div className="container">
   <div className={style.content_container}>
    <div className="col ">
    <h4 className="text-danger text-uppercase text-dark ">WE
  <span className="bg-dark text text-white ">BBlog</span></h4>
    </div>

<div className=" d-flex d-sm-flex d-lg-none position-relative ">
  { menubar ? 
  <IoMdClose  size={40} onClick={()=> setMenubar(false)} 
 />:
  <BiMenu size={40}  onClick={()=> setMenubar( true)} 
 />
}
  { menubar &&
  <div className={style.positioning}>
      <nav className={style.nav} >
    <ul className="p-4" >
    <Link className=" d-block mx-4 text-decoration-none  text-dark" to="/" >Home</Link>
    <Link className=" d-block mx-4 text-decoration-none  text-dark" to="/" >About</Link>
    <Link className=" d-block mx-4 text-decoration-none  text-dark" to="/" >Member</Link>
    </ul>
   </nav>
  </div>
   }
 </div>


    <div className=" d-none d-sm-none d-lg-flex  "
     > <MenuItem/>
 </div>



 </div>
   
  </div>
  );
}

const MenuItem =()=>{
  return(
    <nav className="h5" >
    <ul className=" m-0 p-0 d-flex" >
    <Link className=" mx-4 text-decoration-none  text-dark" to="/" >Home</Link>
    <Link className="  mx-4 text-decoration-none  text-dark" to="/" >About</Link>
    <Link className="  mx-4 text-decoration-none  text-dark" to="/" >Member</Link>
    </ul>
   </nav>
  )

}
 
export default Navbar;