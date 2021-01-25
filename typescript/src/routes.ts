import {Request, Response} from 'express';
import createUser from './services/CreateUser';

/*
* Tipagens primitivas: string, number, boolean, object, array
* interfaces: tipagens de conjuntos de dados, principalmente objetos.
*/


export function helloWord(request: Request, response: Response) {
const user = createUser({
  name: 'Alex Barbosa',
  email: 'alex@alexbarbosa.info',
  password: '123456',
  techs: ['Node.js', 'ReactJS', 'React Native',
  {title: 'JavaScript', experience: 100},

],
})

  return response.json({message: 'Hello Word'})
}