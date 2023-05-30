import { body, check, param, checkExact, ValidationChain } from 'express-validator';
import { validateReq } from '../utils/Validator';
import { NextFunction, Request, Response } from 'express';


const validateCreate = [
    check("data").exists(),
    check("data.*.cedula").exists().toInt().isInt(),
    check("data.*.nombre").exists(),
    check("data.*.apellido").exists(),
    check("data.*.fechaNacimiento").exists().toDate().isDate(),
    check("data.*.telefono").exists(),
    checkExact(),
    (req: Request, res: Response, next: NextFunction) => {
        validateReq(req, res, next);
    }
];

export {
    validateCreate
}