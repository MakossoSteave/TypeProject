import { Request, Response } from 'express';
import Util from '../utils/Util';


export class UserMiddle {
    static registerCheck = (req: Request, res: Response, next: () => void) => {
        try {
          
            if (UserMiddle.checkSexe(req.body.sexe) ) {
                return res.status(409).json({ error: "true", message: "information incorrect" }).end();              
            }
next()
        } catch (err) {
         
            return res.status(409).json({ error: "true", message: " information incorrect" }).end();
        }
    }

    static checkSexe(value: string) {
        return (Util.checkVal(value) || !(value === "Homme" || value === "Femme" || value === "Autre")) ? true : false;
    }
}