import { body, check, param, checkExact, ValidationChain } from 'express-validator';
import { validateReq } from '../utils/Validator';
import { NextFunction, Request, Response } from 'express';


const validateParams = [
    check('id').exists().toInt().isInt(),
    (req: Request, res: Response, next: NextFunction) => {
      validateReq(req, res, next);
    }
];

export {
    validateParams
}