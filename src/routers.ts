import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysControler = new SurveysController();

router.post("/users", userController.create);
router.post("/surveys", surveysControler.create);

export { router };