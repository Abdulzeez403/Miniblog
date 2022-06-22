import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Axios from "axios";



const Createpost=()=>{

 const [title, setTitle] = useState('');
 const [body, setBody] = useState('');
 const [img, setImg] = useState('');
 const [desc, setDesc] = useState('');
 const [author, setAuthor] = useState('mario');
 const [ispending, setIspending] = useState(false);
 const navigate = useNavigate();

 const handleSubmit =(e)=>{
  e.preventDefault();
 /* setIspending(true);

  const post ={title, body, author, img, desc};
  fetch("http://localhost:8080/post", {
   method: "POST",
   headers:{ "Content-Type": "application/json"},
   body: JSON.stringify(post)
  }).then(()=>{
  setIspending(false);
  navigate("/backend");
   
  });*/
 } 

 
//Send data to the server side
const urlInsert = "http://localhost:3003/insert";
const Addtodata=()=>{
 try{
  Axios.post(urlInsert,{
   Title: title,
   Desc: desc,
   Body: body,
   Author: author
  }) ;
 }catch(err){
  throw err;
 }
}




 return(
  <div className="container bg-warning  ">
<h2 className="text-center"> Add a New Blog </h2>
<form onSubmit={handleSubmit } className="text-center">

  <label  className=" h5 d-block">Blog title</label> 
<input 
className=" w-50 p-2 rounded-2  "
type="text"
required
value={title}
onChange={(e)=> setTitle(e.target.value)}
 />

 
<label  className=" h5 d-block mt-2">Blog description</label> <br/>
<textarea required
className=" w-50 p-2 rounded-2  "

value={desc}
onChange={(e)=> setDesc(e.target.value)}
> 
</textarea>
<br/>

<label className=" h5 d-block mt-2">Blog body:</label> <br/>
<textarea required
className=" w-50 p-2 rounded-2  "

value={body}
onChange={(e)=> setBody(e.target.value)}
> 
</textarea>
<br/>
 

 
<label className=" h5 d-block mt-2">Blog Image</label> 
<input 
className=" w-50 p-2 rounded-2  "

type="text"
required
value={img}
onChange={(e)=> setImg(e.target.value)}
 />



<label className=" h5 d-block mt-2">Blog author:</label> <br/>
<select
className=" w-50 p-2 rounded-2  "
value={author}
onChange={(e)=> setAuthor(e.target.value)}
>
 <option value="mario"></option>
 <option value="yoshi"></option>
</select>
<br/>
{!ispending && <button className="btn-primary btn-lg mt-3"
 onClick={()=>{Addtodata()}}>Add Blog</button>}
{ispending && <button>Sending...</button>}
</form>

  </div>
 );
}
export default Createpost; 