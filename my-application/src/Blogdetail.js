import { useParams} from "react-router-dom";
import useFetch from "./useFetch";


const Blogdetail = () => {
  const {id }=useParams();
  const {data, loading, handleError}=useFetch(`http://localhost:8080/post/${id}`);

 return ( 
  <div className="container">
   {loading && <div>Loading...</div>}
   {handleError && <div>{handleError}</div>}
   {data && (

   <div className="container text-center">
 <h4>{data.title}</h4>
  <h4>{data.desc}</h4>
 <p>{data.body}</p>
  <p>Written by {data.author}</p>
  </div>
    ) }
  

  
  </div>
  );
}
 
export default Blogdetail;