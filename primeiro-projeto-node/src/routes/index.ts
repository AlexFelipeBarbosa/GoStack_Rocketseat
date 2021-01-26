import { Router} from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Alex Barbosa' });
})

export default routes;
