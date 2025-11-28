// Vamos a importar el componente Header

import Header from "./components/Header";

/**
 * * como crear un componente desde cero
 */

/* 
El nombre de la funcion solo va en mayuscula cuando es
un componente, se que en compoennte porque tiene
la extension jsx y es una interfa< 
*/

function App() {
  return (
    <section>
      <Header />
      <h1>Hola mundo desde React</h1>
      <div>
        <section>
          <nav></nav>
        </section>
      </div>
      <section></section>
    </section>
  );
}

export default App;
