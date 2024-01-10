import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import toast from "react-hot-toast";

const Update = () => {
  let [student, setStudent] = useState({
    stuname: "",
    stuemail: "",
  });

  let { stuname, stuemail } = student;
  
  let navigate = useNavigate();

  let { id } = useParams()
   console.log(id);

   let getApi = async () => {
    let { data } = await axios.get("http://localhost:3000/student/" + id)
    setStudent(data)
   }

   useEffect(() => {
    try {
      getApi()
    } catch (e) {
      console.log(e);
    }
   },[])  

   let handleChange = event => {
    // console.log(event);
    let { name, value } = event.target;
    setStudent({ ...student, [name]: value});
   };

   let handleSubmit = (e) => {
    e.preventDefault()
    console.log(student);
    try{
        if (stuname === "" && stuemail === "") {
            alert("Please fill both the fields...")
        } else if (stuname === "") {
            alert("Name field is empty please fill it")
        } else if (stuemail === "") {
            alert("Email field is empty please fill it")
        }
        else {
            let payload = {
                stuname,
                stuemail
            };
            axios.put("http://localhost:3000/student/"+id,payload);
            navigate("/viewall");
        }
       
    } catch (e) {
        console.log(e);
    } finally {
       setStudent({
        stuname: "",
        stuemail: ""
       });
    }
}

  return (
    <>
       <Navbar/>
       <div className='homeContainer'>
        <form onSubmit={handleSubmit}>
            <legend className='homeLegend'>UPDATE STUDENT</legend>
            <div>
                <input type="text" placeholder='Enter the name' value={stuname} name="stuname" onChange={handleChange}/>
            </div>
            <div>
                <input type="email" placeholder='Enter the email' value={stuemail} name="stuemail" onChange={handleChange}/>
            </div>
            <div>
                <button className='homeButton'>UPDATE STUDENT</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default Update