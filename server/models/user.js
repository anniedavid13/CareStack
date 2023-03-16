import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firsrname:{type:String, required:true, min: 3 , max: 80},
    Lastname:{type:String, required:true, min: 3 , max: 80},
    email:{type:String, required:true, unique: true , max: 80},
    password:{type:String, required:true, min: 6 , max: 80},
    picturePath:{type:String, default:""},
    friends:{type:Array, default:[]},
   location: String,
   occupation: String,
   viewedProfile: Number,
   impressions: Number,
}, {timestamps: true});


const User = mongoose.model("User", UserSchema);
export default User;
