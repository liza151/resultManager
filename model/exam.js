import mongoose  from "mongoose";


const examSchema= mongoose.Schema({
    examName :{
        type: String,
        required: true
    },
    date :{
        type: Date,
        required: true
    }
    
});
 const Exam = new mongoose.model('exam', examSchema);
 export {Exam};