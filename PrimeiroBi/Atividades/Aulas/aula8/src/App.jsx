import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(1);

  function incrementar() {
    //processamento de regras
    setContador(contador + 1);//...

    console.log(contador);
  }
  return (
    <div>
      <h1>Teste</h1>
      <h3>{contador}</h3>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}