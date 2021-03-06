 /** packages*/

const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")
/**Creacion del shema */
const studentschema = new mongoose.Schema({

    code:{
        type: "String",
        required: true,
        unique:true 

    },
    name:{
        type: "String",
        required: true

    },
    lastname:{
        type: "String",
        required: true

    },
    email:{
        type: "String",
        required: true,
        unique: true

    },
    phone:{
        type: "String",
        required: true

    },
    career:{
        type: "String",
        required: true

    }
})

/**Exportando schema  */
studentschema.plugin(validator)
module.exports = studentschema