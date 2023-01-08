import {  useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Bloglist = () => {
  const id = useParams();
  const navigate = useNavigate();
  const { data } = useFetch(`http://localhost:5000/api/`);
  
  const DeleteFunc = () => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="container">
      {data?.map((blog) => (
        <div className="container shadow" key={blog?._id}>
          <div className="row  row -d-sm-inline  text-decoration-none text text-dark d-flex justify-content-between py-3 my-4 mx-1">
            <div className="col text-sm-center   w-25 ">
              <h4 className="text-danger text-left ">{blog.Title}</h4>
              <h4>{blog.Description}</h4>
              <div className="d-flex justify-content-between w-75 mt-3; ">
                <p> Written by: {blog.Author}</p>
                <div className="mt-0 d-flex ">
                  <p className="mx-2">see: 0</p>
                  <p>view: 0</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <img
                src={blog.Image}
                className="  w-100 "
                style={{ height: 250, objectFit: "cover" }}
                alt="BlogImage"
              />
            </div>
          </div>
          <button className="btn btn-warning" onClick={DeleteFunc()}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
