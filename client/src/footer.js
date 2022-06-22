
import { Link } from "react-router-dom";
import { FaFacebookSquare} from "react-icons/fa";
import { FiTwitter} from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram,BsWhatsapp } from "react-icons/bs";

import "./index.css";

 const FooterPage  = () => {
 return (
  <div className="container  bg-dark">
   <div className="row d-block text-center  bg-dark p-4">



    <div className="col">
     <ul className="">
      <Link className="mx-4 text-decoration-none  text-white" to="/">Home</Link>
      <Link className= "mx-4 text-decoration-none  text-white" to="/">Member</Link>
      <Link  className= "mx-4 text-decoration-none  text-white" to="/">About</Link>
     </ul>
    </div>


    <div className="col d-flex justify-content-center ">
 <ul className="">
 <Link className="  mx-4 text-decoration-none  text-white" to="/">
 <AiFillGithub color="white" size={40}/>
 </Link>
 <Link className=" mx-4 text-decoration-none  text-white" to="/">
 < FaFacebookSquare color="white" size={40}/>
 </Link>
 <Link className="mx-4 text-decoration-none  text-white" to="/">
 <BsInstagram  color="white" size={40} />
 </Link>
 <Link className="mx-4 text-decoration-none  text-white" to="/">
 <BsWhatsapp color="white" size={40} />
 </Link>
 <Link className="mx-4 text-decoration-none  text-white" to="/">
 <FiTwitter color="white" size={40} />
 </Link>
 </ul>
</div>

    <div className="col">
     <h4 className="text-white h5">Built by Abdulazeez Sodiq </h4>
    </div>

   </div>

  </div>
   );
}
 
export  default FooterPage ;