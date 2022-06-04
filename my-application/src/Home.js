
import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const  Home =()=> {

const {data:blogs, loading, handleError}= useFetch("http://localhost:8080/post");

 return(
 <div>
  {handleError && <div className="container">{handleError}</div>}
  {loading && <div  className="container">Laoading....</div>}
{blogs && <Bloglist blogs={blogs}  title="All Blog" />}
 </div>
  );
}

export default Home;