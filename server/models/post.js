const mongoose = require("mongoose")
const postSchema =mongoose.Schema({
  title:{type:String, required:true},
  price:{type:Number, required:true}
});

module.exports=mongoose.model('Post', postSchema);
