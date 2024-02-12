import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const indexRoute = Router();

indexRoute
  .get('/status', AppController.getStatus)
  .get('/stats', AppController.getStats)
  .post('/users', UsersController.postNew)
  .get('/connect', handleAuthorization, AuthController.getConnect)
  .get('/disconnect', handleXToken, AuthController.getDisconnect)
  .get('/users/me', handleXToken, UsersController.getMe)

export default indexRoute;
