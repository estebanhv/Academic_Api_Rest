/** packages */

const mongoose = require("mongoose")

/** usando schema */

const schema = require("../schemas/user.schema")

schema.statics ={
    create : function(data, cb){
        let doc = new this(data)
        doc.save(cb)
    },
    getAll : function(query, cb){
        this.find(query,cb)
    } 
    ,
    getBycode : function(query, cb){
        this.find(query,cb)
    },
    login : function(query, cb){
        this.find(query,cb)
    },
    update : function(query,data, cb){
        this.findOneAndUpdate(query,{$set:data},{new: true},cb)

    },
    delete: function(query, cb){
        this.findOneAndDelete(query,cb) 
    }

}

const dto = mongoose.model("coll_user",schema)
module.exports=dto