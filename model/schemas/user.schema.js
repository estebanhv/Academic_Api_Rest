 /** packages*/

const mongoose = require("mongoose")

/**Creacion del shema */
const userSchema = new mongoose.Schema({

    
    name:{
        type: "String",
        required: true

    },
    lastname:{
        type: "String",
        required: true

    },
    username:{
        type: "String",
        required: true,
        unique:true 

    },
    password:{
        type:"String",
        required: true
    },
    role:{
        type: "Number",
        required: true

    }
})

/**Exportando schema  */
module.exports = userSchema