import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório " />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/12144620?s=400&u=b9785347e44440d8a08fbbaf61a72288c05671e0&v=4"
            alt="Alex Barbosa"
          />
          <div>
            <strong>AlexFelipeBarbosa/GoStack_Rocketseat</strong>
            <p>Repositório criado para o Curso GoStack da Rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
