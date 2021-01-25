/*
* Para criar: name, email, password
*/

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;  // ? identifica que o valor é opcional, ou seja, não é obrigatório
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({name, email, password}:CreateUserData) {
  const user = {
    name, 
    email,
    password
  }
   return user;
}