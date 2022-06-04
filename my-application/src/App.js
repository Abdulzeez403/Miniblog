import Navbar from "./Navbar"
import Home from "./Home";
import NewBlog from "./Newblog";
import Blogdetail from "./Blogdetail";
import NotPage from "./notPage";
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Deletepost from "./deletepost";
import Backend from "./backend";
import FooterPage from "./footer";

function App() {
 return(
  
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route  path="/" element={<Home />}/>
  <Route path="/backend/create" element={<NewBlog />}/>
  <Route path="/backend/delete" element={<Deletepost />}/>
  <Route path="/backend" element={<Backend />}/>
  <Route path="/blogs/:id" element={<Blogdetail />}/>
  <Route path="*" element={<NotPage />}/>


  </Routes>
<FooterPage/>

  </BrowserRouter>

  
 )
}

export default App;
