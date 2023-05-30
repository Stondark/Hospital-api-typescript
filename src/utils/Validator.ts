import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

const validateReq = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const errors = validationResult(req);
    errors.throw();
    next();
  } catch (error: any) {
    res.status(400).json({ success: false, errors: error.array() });
  }
};

export {
  validateReq,
};