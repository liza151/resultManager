import {Router} from 'express';
import { createResult } from '../controllers/result.js';
import { getResultList } from '../controllers/result.js';

const resultRouter = new Router();

resultRouter.get('/', getResultList);
resultRouter.post('/', createResult);

export default resultRouter;
    

