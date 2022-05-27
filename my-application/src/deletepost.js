   import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const Deletepost = () => {

 const {data:blog, loading, handleError}=useFetch(`http://localhost:8000/post`);
 
 const DeleteFunc =()=>{
 const {id }=useParams();
 const navigate = useNavigate()
  fetch(`http://localhost:8000/post/${id}` ,{
   method: "DELETE",
  }).then(()=>{
   navigate("/backend")
  })
 }




 return ( 
  <div className="container">
   <h4>Delete Page</h4>
   {loading && <div>Loading...</div>}
   {handleError && <div>{handleError}</div>}
   {blog && (<div className="container text-center">
 <h4 className="text-dark">{blog.title}</h4>
  <p>Written by {blog.desc}</p>
  <button className="btn btn-warning " onClick={()=>{DeleteFunc()}} >Delete</button>
  </div>
    ) }
  

  
  </div>

  );
}
 
export default Deletepost;







