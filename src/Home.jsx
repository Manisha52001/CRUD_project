import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Home = () => {

    let [student, setStudent] = useState({
        stuname: "",
        stuemail: ""
    })

    let { stuname, stuemail } = student

    let navigate=useNavigate();

    let handleChange = (event) => {
        // console.log(event);
        let { name, value } = event.target
        setStudent({...student,[name]:value})
    }
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
                axios.post("http://localhost:3000/student",payload);
                navigate("/viewall");
                toast.success("Successfully added!");
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
        <h1 id='homePage'>WELCOME TO HOME PAGE</h1>
        <form onSubmit={handleSubmit}>
            <legend className='homeLegend'>ADD STUDENT</legend>
            <div>
                <input type="text" placeholder='Enter the names' value={stuname} name="stuname" onChange={handleChange}/>
            </div>
            <div>
                <input type="email" placeholder='Enter the emails' value={stuemail} name="stuemail" onChange={handleChange}/>
            </div>
            <div>
                <button className='homeButton'>ADD STUDENT</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default Home