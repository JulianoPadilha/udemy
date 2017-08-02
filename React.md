# React with Redux

## Primeiro componente

```js
// Importa a biblioteca do React e ReactDOM (para renderizar os componentes no DOM).
import React from 'react';
import ReactDOM from 'react-dom';

// Cria um novo componente utilizando JSX(<div></div>, neste caso) e ES6(arrow functions, neste caso)
const App = () => {
	return <div>Hello World!</div>
}

// Renderiza o componente no DOM passando uma instância dele e onde queremos renderizá-lo
ReactDOM.render(<App />, document.querySelector('.container'));
```