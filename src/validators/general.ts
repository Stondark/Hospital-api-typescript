import { check } from 'express-validator';
import { validateReq } from '../utils/Validator';
import { NextFunction, Request, Response } from 'express';

/**
 * Valida una estructura json pasada en el request bajo ciertos parámetros
 */

const validateParams = [
    check('id').exists().toInt().isInt(),
    (req: Request, res: Response, next: NextFunction) => {
      validateReq(req, res, next);
    }
];

export {
    validateParams
}