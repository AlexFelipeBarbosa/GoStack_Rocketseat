/* Sempre que for criar um componente no React (arquivo com trecho de código)
Colocar sempre com letra maiuscula no começo.
ex: App.js
*/
import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import backgroundImage from "./assets/background.jpeg";
import Header from "./components/Header";

/* 3 Conceitos importantes do React.
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  /* useState retorna um array com 2 posições.
   * 1. Variável com o seu valor inicial.
   * 2. Função para atualizarmos esse valor.
   */

  async function handleAddProject() {
    //  projects.push(`Novo Projeto ${Date.now()}`);
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]); // utilizando o conceito de imutabilidade

    const response = await api.post("projects", {
      title: "BackEnd com NodeJs",
      owner: "Alex Barbosa",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    // Utilizando o conceito de fragment <>  </>
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
