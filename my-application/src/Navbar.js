import {Link} from "react-router-dom";

const Navbar = () => {
 return ( 
  <div className="container ">
    

   <div className="row d-fleX justify-content-between my-5">
    <div className="col    ">
    <h4 className="text-danger text-uppercase text-dark ">WE
  <span className="bg-dark text text-white">BBlog</span></h4>
    </div>
    <div className="col">
    <nav className="h4" >
     <ul className="menuList" >
     <Link className="mx-4 text-decoration-none  text-dark" to="/" >Home</Link>
     <Link className="mx-4 text-decoration-none  text-dark" to="/" >About</Link>
     <Link className="mx-4 text-decoration-none  text-dark" to="/" >Member</Link>

     
     
   
     </ul>

    </nav>
 </div>
 </div>
   
  </div>
  );
}
 
export default Navbar;