const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.connect(`${process.env.DB_CONNECT}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((res)=>{
        console.log(`Mongodb connected successfully ${res.connection.host}`);
    }).catch((err)=>{
        console.log(`Error to connect DB ${err}`);
    })
}

module.exports = connectDatabase