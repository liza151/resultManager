import {Exam} from '../model/exam.js';
 export  async function getExamList(req, res) {
    const exam= await Exam.find();
    res.json(exam);
}

export async function createExam(req, res) {
    const body = req.body;
    const exam = new Exam(body);
    const createExam= await exam.save();
    res.json(createExam);
};