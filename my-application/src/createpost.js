import {useState} from "react";
import {useNavigate} from "react-router-dom";


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
  setIspending(true);

  const post ={title, body, author, img, desc};
  fetch("http://localhost:8080/post", {
   method: "POST",
   headers:{ "Content-Type": "application/json"},
   body: JSON.stringify(post)
  }).then(()=>{
  setIspending(false);
  navigate("/backend");
   
  });
 }











 return(
  <div className="create">
<h2> Add a New Blog </h2>
<form onSubmit={handleSubmit}>

  <label>Blog title:</label> 
<input 
type="text"
required
value={title}
onChange={(e)=> setTitle(e.target.value)}
 />

 
<label>Blog description:</label> <br/>
<textarea required
value={desc}
onChange={(e)=> setDesc(e.target.value)}
> 
</textarea>
<br/>

<label>Blog body:</label> <br/>
<textarea required
value={body}
onChange={(e)=> setBody(e.target.value)}
> 
</textarea>
<br/>
 

 
<label>Blog Image:</label> 
<input 
type="text"
required
value={img}
onChange={(e)=> setImg(e.target.value)}
 />



<label>Blog author:</label> <br/>
<select
value={author}
onChange={(e)=> setAuthor(e.target.value)}
>
 <option value="mario"></option>
 <option value="yoshi"></option>
</select>
<br/>
{!ispending && <button>Add Blog</button>}
{ispending && <button>Sending...</button>}
</form>

  </div>
 );
}
export default Createpost; 