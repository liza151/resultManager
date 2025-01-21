import {Subject} from '../model/subject.js';
 export  async function getSubjectList(req, res) {
    const subject= await Subject.find();
    res.json( subject);
}

export async function createSubject(req, res) {
    const body = req.body;
    const subject = new Subject(body);
    const createSubject= await subject.save();
    res.json(createSubject);
};