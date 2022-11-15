import { useState } from "react";

import "./App.css";

function App() {
  const [calcular, setCalcular] = useState("");
  const [resultado, setResultado] = useState(0);

  const operadores = ["*", "+", "-", "/", "."];

  const modificacionDeCalc = (valor)=>{
    if (operadores.includes(valor) && calcular === "" || operadores.includes(valor) && operadores.includes(calcular.slice(-1))) {
      return
    }
    setCalcular(calcular + valor)

    if (!operadores.includes(valor)) {
      setResultado(eval(calcular + valor).toString())
    }
  }

  const creacionDeNumeros = () => {
    const numeros = [];

    for (let i = 1; i < 10; i++) {
      numeros.push(<button key={i} onClick={()=>modificacionDeCalc(i)}>{i}</button>);
    }
    return numeros;
  };

  const calculo = ()=>{
    setCalcular(eval(calcular).toString())
  }

  const clear = ()=>{
    setCalcular("")
  }

  return (
    <div className="App">
      <div className="calculadora">
        <div className="contenedor_calculadora">
          {/* {resultado ? <span>({resultado})</span>: ""} */}
          {calcular}
        </div>
        <div className="contenedor_operadores">
          <button onClick={clear}>AC</button>
          <button onClick={()=>modificacionDeCalc("+")}>+</button>
          <button onClick={()=>modificacionDeCalc("/")}>/</button>
          <button onClick={()=>modificacionDeCalc("*")}>*</button>
          <button onClick={()=>modificacionDeCalc("-")}>-</button>
        </div>

        <div className="contenedor_digitos">
          {creacionDeNumeros()}
          <button onClick={()=>modificacionDeCalc("0")}>0</button>
          <button onClick={()=>modificacionDeCalc(".")}>.</button>
          <button onClick={calculo}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
