import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true,trim:true},description:{type:String,required:true,trim:true},category:{type:String,default:'General'},status:{type:String,enum:['Open','In Progress','Completed','Cancelled'],default:'Open'},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}},{timestamps:true});
export default mongoose.model('Record',schema);
