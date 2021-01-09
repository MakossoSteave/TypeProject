import { Router } from 'express';
import { AuthMiddle } from '../middlewares/Auth.middle';
import { UserController } from '../controller/UserController';

const route: Router = Router();
route.put('/user')
route.delete('/user',AuthMiddle.token,UserController.suppress)

export { route as UserRoute }