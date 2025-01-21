import {Router} from 'express';
import {getExamList, createExam} from '../controllers/exam.js';
const examRouter = new Router();

examRouter.get('/',  getExamList);
examRouter.post('/',  createExam);

export default examRouter;

