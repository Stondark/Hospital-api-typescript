import { check, checkExact } from 'express-validator';
import { validateReq } from '../utils/Validator';
import { NextFunction, Request, Response } from 'express';

/**
 * Valida una estructura json pasada en el request bajo ciertos parámetros
 */

const validateCreate = [
    check("data").exists(),
    check("data.cedula").exists().toInt().isInt(),
    check("data.nombre").exists(),
    check("data.apellido").exists(),
    check("data.fechaNacimiento").exists().isISO8601().toDate(),
    check("data.telefono").exists(),
    checkExact(),
    (req: Request, res: Response, next: NextFunction) => {
        validateReq(req, res, next);
    }
];

export {
    validateCreate
}