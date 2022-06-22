import {Link} from "react-router-dom"

const Navbar = () => {
 return ( 
  <div className="container-full w-25 " >
   <div className="col d-block bg-primary h-100 text-center "  
   style={{height:"200px", color:"red"}} >
    <br />
   <Link to="/" className="list-unstyled text-decoration-none h5  text-white  d-block">CreatePost</Link>
   <br />

   <Link to="analysis"  className="list-unstyled text-decoration-none h5   text-white  d-block">Analysis</Link>
   </div>

  </div>
  );
}
 
export default Navbar;