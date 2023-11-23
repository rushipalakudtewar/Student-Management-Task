import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateStudent from './CreateStudent';
import toast from 'react-hot-toast';
import { BASEURL } from './BaseUrl';

const StudentDetails = () => {
    const [addSection,setAddSection] = useState(false)
    const [editSection,setEditSection] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '', 
        city: 'Select City', 
      });
    const [formEditData, setFormEditData] = useState({
        name: '',
        age: '',
        sex: '', 
        city: 'Select City',
        _id:'' 
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit =  async(e) => {
          e.preventDefault();
            await axios.post(`${BASEURL}/api/v1/createstudent`, formData)
            .then((res)=>{
                toast.success(res.data.message)
                getAllStudents()
                setAddSection(false)
            })
            .catch((err)=>{
                toast.error(err.message)
            })
        }
    const [dataList, setDataList]= useState([])

    const getAllStudents = async() =>{
        await axios.get(`${BASEURL}/api/v1/getallstudent`)
        .then((res)=>{
            setDataList(res.data.stud)
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    const handleUpdate = async(e) =>{
        e.preventDefault();
        await axios.put(`${BASEURL}/api/v1/updatestudent/${formEditData._id}`,formEditData)
        .then((res)=>{
            toast.success(res.data.message)
            getAllStudents()
            setEditSection(false)
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    const handleEditInputChange = (e) =>{
        const { name, value } = e.target;
        setFormEditData({ ...formEditData, [name]: value });
    }
    const handleEdit = (item) =>{
        setFormEditData(item)
        setEditSection(true)
    }
    useEffect(()=>{
        getAllStudents()
    },[])
    let count=1;
    return (
    <div>
        <div className='flex justify-between items-center mx-6 mt-4 '>
            <h1 className='font-bold text-3xl'>Student Details</h1>
            <button onClick={()=>setAddSection(true)} className='bg-violet-800 text-white px-5 py-3 shadow-lg'>Add Student</button>
            {
                addSection && (
                <CreateStudent handleInputChange={handleInputChange} handleSubmit={handleSubmit} formData={formData} close={()=>setAddSection(false)} title={addSection}/>
                )
            }
            {
                editSection && (
                <CreateStudent handleInputChange={handleEditInputChange} handleSubmit={handleUpdate} formData={formEditData} close={()=>setEditSection(false)} title={editSection}/>
                )
            }
        </div>
        <div className='flex justify-center items-center mx-10 mt-10'>
        <table className="table-auto border-collapse border border-gray-300 shadow-2xl mb-20">
            <thead className='bg-gray-200'>
                <tr>
                    <th className="border p-2">No.</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Age</th>
                    <th className="border p-2">Gender</th>
                    <th className="border p-2">City</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            {
                dataList[0] ?
                (<tbody>
                    {
                        dataList.length>0 && dataList.map((item)=>{
                            return (
                                <>
                                <tr className='bg-gray-100 hover:bg-gray-200 capitalize'>
                                    <td className="border px-14 p-2">{count++}</td>
                                    <td className="border px-14 p-2">{item.name}</td>
                                    <td className="border px-14 p-2">{item.age}</td>
                                    <td className="border px-14 p-2">{item.sex}</td>
                                    <td className="border px-14 p-2">{item.city}</td>
                                    <td className="border px-14 p-2">
                                        <button className="border bg-pink-600 text-white px-10 py-1" onClick={()=>handleEdit(item)}>Edit</button>
                                    </td>
                                </tr>                
                                </>                            
                            )
                        })
                    }       
                </tbody>
                ) : (
                    <p className='text-center text-xl'>No Data Found</p>    
                )
            }
        </table>
        </div>

    </div>
  )
}

export default StudentDetails