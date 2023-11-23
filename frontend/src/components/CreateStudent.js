import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

const CreateStudent = ({handleSubmit,handleInputChange,formData,close}) => {   
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 ">

  <div className="bg-white p-8 rounded shadow-2xl max-w-md w-full ">
    <div className='flex justify-between items-center'>
    <h2 className="text-2xl font-semibold mb-6">Add / Update Student</h2>
    <div className='text-3xl mb-6 cursor-pointer' onClick={close}><IoCloseCircle /></div>
    </div>
    <form onSubmit={handleSubmit} >
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
      <input type="text" name="name" value={formData.name}
            onChange={handleInputChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
            placeholder="Abhijeet Patil" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">Age</label>
      <input type="number" name="age"
            value={formData.age}
            onChange={handleInputChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="25" required />
    </div>

    

    <div className="mb-6">
      <label className="block text-gray-600 text-sm font-medium mb-2">Gender</label>
      <div className='ml-4'>
             <label className="mr-2">
               <input
                type="radio"
                name="sex"
                value="male"
                checked={formData.sex === 'male'}
                onChange={handleInputChange}
                className="mr-1"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={formData.sex === 'female'}
                onChange={handleInputChange}
                className="mr-1"
              />
              Female
            </label>
          </div>
    </div>

    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">City</label>
      <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="Select City" disabled>
              Select City
            </option>
            <option value="Pune">Pune</option>
            <option value="Nashik">Nashik</option>
            <option value="Sambhajinagar">Sambhajinagar</option>
            <option value="Nanded">Nanded</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Thane">Thane</option>
            <option value="Akola">Akola</option>
            <option value="Dhule">Dhule</option>
            <option value="Sangli">Sangli</option>
            <option value="Nagpur">Nagpur</option>
          </select>
    </div>
    <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Submit</button>
    </form>
  </div>
</div>
  )
}

export default CreateStudent