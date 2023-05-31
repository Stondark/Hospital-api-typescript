import {  check,  checkExact } from 'express-validator';
import { validateReq } from '../utils/Validator';
import { NextFunction, Request, Response } from 'express';


const validateCreate = [
    check("data").exists(),
    check("data.fechaHora").exists().isISO8601().toDate(),
    check("data.idPaciente").exists().toInt().isInt(),
    check("data.idMedico").exists().toInt().isInt(),
    checkExact(),
    (req: Request, res: Response, next: NextFunction) => {
        validateReq(req, res, next);
    }
];

export {
    validateCreate
}