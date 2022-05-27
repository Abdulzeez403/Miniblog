import { Link } from "react-router-dom";

const Bloglist = ({blogs, title}) => {

 
 return ( 
  <div className="container">
  <h4>{title}</h4>
    {blogs.map((blog)=>{
  return(
  <div className="container shadow"
   key={blog.id}>
   <Link  className="row  row -d-sm-inline  text-decoration-none text text-dark d-flex justify-content-between py-3 my-4 mx-1"
   to = {`/blogs/${blog.id}`}>

   <div className="col text-sm-center   w-25 ">
   <h4 className="text-danger text-left ">{blog.title}</h4>
   <h4>{blog.desc}</h4>
   <div className="d-flex justify-content-between w-75 mt-3; ">
   <p> Written by: {blog.author}</p>
   <div className="mt-0 d-flex ">
   <p className="mx-2">see: 0</p>
    <p>view: 0</p>
   </div>
   </div>
   </div>

   <div className="col-sm-12 col-md-6">
   <img className="  w-100 " src={blog.img} style={{height: 250, objectFit: "cover"}} alt="BlogImage"/>
   </div>

   </Link>
  </div>)
 })
 }
  </div>
  );
}
 
export default Bloglist;