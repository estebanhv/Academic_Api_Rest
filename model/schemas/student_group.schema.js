 /** packages*/

const mongoose = require("mongoose")

/**Creacion del shema */
const student_groupSchema = new mongoose.Schema({

    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_student",
        required: true
        

    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_group",
        required: true
        

    }
})

/**Exportando schema  */
module.exports = student_groupSchema