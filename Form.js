import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup"

export default function Form() {
 const [form,setform]=useState([])
 const dataValues = (values)=>{
    setform([...form,values])
    fill.resetForm()

 }
 const DeleateHandler=(indexvalue)=>{
    const FilterTodo=form.filter((elem,index)=>index!==indexvalue);
    setform(FilterTodo)
  }
    const fill=useFormik({
        initialValues:{
            formname:"",
            formemail:"",
            formpassword:""
        },
        validationSchema:yup.object({
            formname:yup.string().required('name is required'),
           
            formemail:yup.string().required('email is required')
            .matches( /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ ,'Email is invalid'),
            formpassword:yup.string().required('password is required'),
        }),
        onSubmit:dataValues
    })
  return (
  <div>
       <div  className=' w-100 d-flex justify-content-center'>
        <div className=' mt-5 w-50'>
            <h1 className='text-[#45944a] ml-[120px]'>Form validation</h1>
            {/* {JSON.stringify(fill)} */}
            <div className='border p-3'>
                <label for="name" className='mt-2'><strong>Name:</strong></label>
                <input typeof='text'placeholder='Enter Name' name="formname" id="formname" className='form-control' {...fill.getFieldProps("formname")}/>
                <p className='text-[#FF0000]'>{fill.errors.formname && fill.touched.formname && (fill.errors.formname)}</p>
                <label for="email" className='mt-2'><strong>Email:</strong></label>
                <input typeof='text'placeholder='Enter Email' name="formemail" id="password" className='form-control' {...fill.getFieldProps("formemail")}  />
                <p className='text-[#FF0000]'>{fill.errors.formemail&& fill.touched.formemail && (fill.errors.formemail)}</p>
                <label for="password" className='mt-2'><strong>Password:</strong></label>
                <input typeof='text'placeholder='Enter Password' name="password" className='form-control' {...fill.getFieldProps("formpassword")} />
                <p className='text-[#FF0000]'>{fill.errors.formpassword && fill.touched.formpassword && (fill.errors.formpassword)}</p>
                <div className='mt-3'>
                    <button className='btn btn-success w-30 ml-[180px]'disabled={!(fill.isValid && fill.dirty)}  onClick={fill.handleSubmit} >Validate</button>
                </div>
            </div>
        </div>
    </div>
    <table className='w-[1200px] ml-[100px] mb-[40px]'>
    <thead className='border-solid border-1 border-[#000000] h-[40px] text-center'>
        <th className='border-solid border-1 border-[#000000] h-[40px]'>name</th>
        <th className='border-solid border-1 border-[#000000] h-[40px]'>email</th>
        <th className='border-solid border-1 border-[#000000] h-[40px]'>password</th>
        </thead>
      <tbody className='text-center'>
{form.map((i,index)=>{
return <tr>
    <td className='border-solid border-1 border-[#000000] h-[40px] text-center'>{i.formname}</td>
    <td className='border-solid border-1 border-[#000000] h-[40px] text-center'>{i.formemail}</td>
    <td className='border-solid border-1 border-[#000000] h-[40px] text-center'>{i.formpassword}</td>
    <td className='border-solid border-1 border-[#000000] h-[40px]' onClick={()=>{DeleateHandler(index);} }>delete</td>
</tr>

})}
       </tbody>
       
    </table>
    </div>
  )
}

