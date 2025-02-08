import mongoose  from "mongoose";


const subjectSchema= mongoose.Schema({
    subjectName :{
        type: String,
        required: true
    },
    subjectCode :{
        type: String,
        required: true
    },
    semester : {
        type: String,
        enum:['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'],
        required: true,
    },   
});
 const Subject = new mongoose.model('Subject', subjectSchema);
 export {Subject};