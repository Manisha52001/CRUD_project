import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ViewAll = () => {

  let [student, setStudent] = useState([])

  let getApi = async () => {
    let {data} = await axios.get("http://localhost:3000/student");
    setStudent(data)
  }

  console.log(student);

  // ?[]-->componentDidMount()-->it runs only once
  // ?useEffect is the best place to fetch the data
  useEffect(() => {
    try {
      getApi()
    } catch (e) {
      console.log(e);
    }
  }, [])

  let deleteStudent = (id) => {
    console.log(id);
    axios.delete("http://localhost:3000/student/" + id);
    window.location.assign("/viewall");
  }
  return (
    <>
        <Navbar/>
        <div className='mainContainer'>
        <h1>All Student's Information</h1>
        <table border={2} cellSpacing={0}>  
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th colSpan={3}>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {student.map((x) => {
              console.log(x);
              return (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.stuname}</td>
                  <td>{x.stuemail}</td>
                  <td><NavLink to={`/edit/${x.id}`}><button>UPDATE</button></NavLink></td>
                  <td><button onClick={()=>deleteStudent(x.id)}>DELETE</button></td>
                  <td><NavLink to={`/singlestu/${x.id}`}><button>VIEW-MORE</button></NavLink></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </>
  )
}

export default ViewAll