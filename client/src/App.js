import Navbar from "./Navbar"
import Home from "./Home";
import Blogdetail from "./Blogdetail";
import NotPage from "./notPage";
import{BrowserRouter, Routes, Route} from "react-router-dom"
import FooterPage from "./footer";

function App() {
 return(
  
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route  path="/" element={<Home />}/>
  <Route path="/blogs/:id" element={<Blogdetail />}/>
  <Route path="*" element={<NotPage />}/>


  </Routes>
<FooterPage/>

  </BrowserRouter>

  
 )
}

export default App;
