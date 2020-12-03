const express = require("express");

const app = express();

app.use(express.json());

/* Métodos HTTP:
GET: Buscar informações do Back-end
POST: Criar um informação no Back-end
PUT/PATCH: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/* Tipo de Parâmetros
Query Params: Filtros e paginação
Route Params: Identificar recursos (Atualizar/Deletar)
Request Params: Conteúdo na hora de criar ou editar um recurso (JSON)
*/

app.get("/projects", (request, response) => {
  const { title, owner } = request.query;
  console.log(title);
  console.log(owner);

  return response.json(["Projeto 1", "Projeto2"]);
});

app.post("/projects", (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json(["Projeto 1", "Projeto2", "Projeto3"]);
});

app.put("/projects/:id", (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json(["Projeto 5", "Projeto2", "Projeto3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto2", "Projeto3"]);
});

app.listen(3333, () => {
  console.log("Back-end Started!!!");
});
