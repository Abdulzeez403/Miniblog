import {Link} from "react-router-dom";

const Backend = () => {
 return (
  <div className="container">
    <Link className="mx-4 text-decoration-none 
      text-dark" to="create">New Blog</Link>

<Link className="mx-4 text-decoration-none 
   text-dark" to="delete">DeletePost</Link>
  </div>
   );
}
 
export default Backend;