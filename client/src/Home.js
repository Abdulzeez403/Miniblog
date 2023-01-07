import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    handleError,
  } = useFetch("http://localhost:5000/api");

  return (
    <div>
      {handleError && <div className="container">{handleError}</div>}
      {loading && <div className="container">Loading..</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blog" />}
    </div>
  );
};

export default Home;
