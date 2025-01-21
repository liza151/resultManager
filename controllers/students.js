import {Student} from '../model/students.js';
 export  async function getStudentList(req, res) {
    const students= await Student.find();
    res.json( students);
}

export async function createStudent(req, res) {
    const body = req.body;
    const student = new Student(body);
    const createStudent= await student.save();
    res.json(createStudent);
};