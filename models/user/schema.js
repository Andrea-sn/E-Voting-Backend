/**
 * Created by andrea on 1/3/15.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


var Userschema = new Schema({
    name: {type:String,required:true},
    age: {type:Number}
});

module.exports = mongoose.model('User', Userschema);