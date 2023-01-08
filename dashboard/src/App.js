import Createpost from "./components/createPost";
import Analysis from "./components/analysis";
import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";


const  App =()=> {
  return (
   <div className="container-fluid d-flex">
   <Navbar/>
   <Routes>
  <Route  path="/" element={<Createpost />}/>
  <Route  path="analysis/:id" element={<Analysis />}/>
  </Routes>
  </div>

    
  );
}


export default App;
