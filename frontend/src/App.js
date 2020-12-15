/* Sempre que for criar um componente no React (arquivo com trecho de código)
Colocar sempre com letra maiuscula no começo.
ex: App.js
*/
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    // Utilizando o conceito de fragment <>  </>
    <>
      <Header />
      <Header />
    </>
  );
}

export default App;
