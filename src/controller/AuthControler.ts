import { Request, Response } from 'express';
export class AuthController{
    static login = async (req: Request, res: Response) => {
      
        try{
        let data: any = req.body;
  
      return res.status(400).json({ error: "ok"})
        
    }catch(err){
        
    }
    }
}