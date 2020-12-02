const express = require("express");

const app = express();

/* Métodos HTTP:
GET: Buscar informações do Back-end
POST: Criar um informação no Back-end
PUT/PATCH: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto2", "Projeto3"]);
});

app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto 5", "Projeto2", "Projeto3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto2", "Projeto3"]);
});

app.listen(3333, () => {
  console.log("Back-end Started!!!");
});
