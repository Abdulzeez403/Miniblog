import { useParams} from "react-router-dom";
import useFetch from "./useFetch";


const Blogdetail = () => {
  const id =useParams();
  const {data, loading, handleError}=useFetch(`http://localhost:3003/api/${id}`);

 return ( 
  <div className="container">
   {loading && <div>Loading...</div>}
   {handleError && <div>{handleError}</div>}
   {data && (

   <div className="container text-center">
 <h4>{data.Title}</h4>
  <h4>{data.Description}</h4>
 <p>{data.Body}</p>   
  <p>Written by {data.Author}</p>
  </div>
    ) }
  

  
  </div>
  );
}
 
export default Blogdetail;