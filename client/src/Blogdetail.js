import { useParams} from "react-router-dom";
import useFetch from "./useFetch";


const Blogdetail = () => {
  const {id} =useParams();
  const {data:blogs, loading, handleError}=useFetch(`http://localhost:5000/api/${id}`);

 return ( 
  <div className="container">
   {loading && <div>Loading...</div>}
   {handleError && <div>{handleError}</div>}
   {blogs && (
   <div className="container text-center">
 <h4>Title{blogs.Title}</h4>
  <h4>Desc{blogs.Description}</h4>
 <p>{blogs.Body}</p>   
  <p>Written by {blogs.Author}</p>
  </div>
    ) }  
  </div>
  );
}
 
export default Blogdetail;