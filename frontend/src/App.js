/* Sempre que for criar um componente no React (arquivo com trecho de código)
Colocar sempre com letra maiuscula no começo.
ex: App.js
*/
import React from "react";
import Header from "./components/Header";

/* 3 Conceitos importantes do React.
 * Componente:
 * Propriedade:
 * Estado:
 */

function App() {
  return (
    // Utilizando o conceito de fragment <>  </>
    <>
      <Header title="HomePage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
