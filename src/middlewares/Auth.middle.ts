
import { Request, Response } from 'express';

import { verify } from 'jsonwebtoken';
import Util from '../utils/Util';
import User from '../entities/User';
import { JWTSecurity } from '../security/JWTSecurity';
import { Connection, createConnection, createConnections, getConnection, getRepository, Repository } from "typeorm";
import { jsonIgnoreReplacer } from 'json-ignore';


export class AuthMiddle {

    static loginCheck = async (req: Request, res: Response, next: () => void) => {
        try {

            let data: any = req.body;
            if (Util.checkVal(data.Password) || Util.checkVal(data.Email)) {
                return res.status(400).json({ error: "true", message: "Email/password manquants" }).end();
            }
           
        try{
            await createConnection();
        }catch(err){
            await getConnection();
        }
        

            let  repository = getRepository(User)
            await repository.findOne({ where: { email: data.Email } }).then(u => {
                if (!(u === undefined)) {
                    if (u.$try >= 5) {
                        return res.status(429).json({ error: true, message: "Trop de tentive sur email " + u.$email + " (5max) - Veuillez patienter (2min)" }).end();

                    }

                    if (data.Password === u?.$password) {
                        let content = JSON.stringify(u, jsonIgnoreReplacer);
                        let stringUser = JSON.parse(content);
                        return res.status(200).json({ error: "false", message: "Succes", token: "Bearer "+JWTSecurity.encode(u), user: stringUser })
                      
                    } else {
                        u.$try += parseInt("1");
                        repository.save(u);
  
                        return res.status(400).json({ error: "true", message: "adresse email deja utilisé" })
        
                    }
                }else{
                    return res.status(400).json({ error: "true", message: "Compte deja existant" })       
                }
            })
        } catch (err) {

            return res.status(401).json({ error: true, message: err }).end();
        }
    }

    static token = (req: Request, res: Response, next: () => void) => {

     
        try {
          if (req.headers.authorization && verify(Util.split(req.headers.authorization), <string>process.env.JWT_KEY))
                next()
        } catch (err) {
            console.log(err)
            return res.status(401).json({ error: true, message: "erreur token incorect" }).end();
        }

    }


}