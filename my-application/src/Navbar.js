import {Link} from "react-router-dom";

const Navbar = () => {
 return ( 
  <div className="container ">
    

   <div className="row d-fleX justify-content-between my-5">
    <div className="col  ">
    <h4 className="text-danger text-uppercase">WEBBlog</h4>
    </div>
    <div className="col">
    <nav className="h4" >
     <ul >
     <Link className="mx-4 text-decoration-none text-dark" to="/" >Home</Link>
   
     </ul>

    </nav>
 </div>
 </div>
   
  </div>
  );
}
 
export default Navbar;