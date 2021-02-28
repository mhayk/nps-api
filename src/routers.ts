import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysControler = new SurveysController();
const sendMailController = new SendMailController();

router.post("/users", userController.create);

router.post("/surveys", surveysControler.create);
router.get("/surveys", surveysControler.show);

router.post("/sendmail", sendMailController.execute);

export { router };