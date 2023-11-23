const Student = require('../models/studentModel')

exports.createStudent = async(req,res)=>{
    try{
        const {name,age,sex,city} = req.body;
        if(!name || !age || !sex || !city)
        {
            res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const createdstudent = await Student.create({
            name,age,sex,city
        })
        res.status(201).json({
            success:true,
            message:'Student Created Successfully',
            stud:createdstudent
        })
    }
    catch{
            res.status(500).json({
                success:false,
                error:'Failed to create data, try again!'
            })
    }
}


exports.getAllStudents = async(req,res)=>{
    try
    {
        const allStud = await Student.find();
        res.status(200).json({
            success:true,
            message:'Fetched student data',
            stud:allStud
        })
        
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            error:'Failed to fetching data!'
        })       
    }
}


exports.updateStudent = async(req,res) =>{
    try
    {
        let updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true,
        })
        res.status(200).json({
            success:true,
            message:"Student Updated Successfully",
            updatedData:updated
        })
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            error:"Failed to update data"
        })
    }
}