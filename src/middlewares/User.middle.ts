import { Request, Response } from 'express';
// import Reflexion from '../utils/Reflexion';
import User from '../entities/User';
// import Bdd from '
import Role from '../entities/Role';
import { DateUtil } from '../utils/DateUtil';
import Util from '../utils/Util';


export class UserMiddle {
    static registerCheck = (req: Request, res: Response, next: () => void) => {
        try {
          
            if (UserMiddle.checkSexe(req.body.sexe) || !(DateUtil.isValidDate(req.body.date_naissance))) {
                return res.status(409).json({ error: "true", message: "Une ou plusieurs données sont érronées" }).end();              
            }
next()
        } catch (err) {
            if (err.code === "ER_DUP_ENTRY") {
                console.log("DUP ENTRY !");
         
            }
            return res.status(409).json({ error: "true", message: "Une ou plusieurs données sont érronées" }).end();
        }
    }

    static checkSexe(value: string) {
        return (Util.checkVal(value) || !(value === "Homme" || value === "Femme" || value === "Autre")) ? true : false;
    }
}