import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleStudent = () => {

    let [student,setStudent]=useState('')

    let navigate = useNavigate()

    let { id } = useParams()
    console.log(id);

    let getApi = async() => {
        let {data} = await axios.get("http://localhost:3000/student/" + id);
        setStudent(data)
    }

    console.log(student);

    let gotohome = () => {
        navigate("/")
    }

    let goback = () => {
        navigate(-1)
    }

    useEffect(() => {
        try {
            getApi()
        } catch (e) {
            console.log(e);
        }
    }, []);

  return (
    <>
        <section className='homeContainer'>
            <h1 id='viewIndividual'>Details of Individual Student</h1>
            <article id='viewSection'>
                <h1>Sl.No: {student.id}</h1>
                <h1>Name: {student.stuname}</h1>
                <h1>Email: {student.stuemail}</h1>
                <div>
                    <button onClick={gotohome}>Go to Home</button>
                    <button onClick={goback}>Go-Back</button>
                </div>
            </article>
        </section>
    </>
  )
}

export default SingleStudent

// !useParams()-->hook -->"react-router-dom"
// we can fetch the parameter or the value present in the url by destructuring