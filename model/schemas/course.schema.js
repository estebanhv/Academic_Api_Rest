 /** packages*/

const mongoose = require("mongoose")

/**Creacion del shema */
const courseSchema = new mongoose.Schema({

    code:{
        type: "String",
        required: true

    },
    name:{
        type: "String",
        required: true

    }
    
})

/**Exportando schema  */
module.exports = courseSchema