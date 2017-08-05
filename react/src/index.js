// Importa a biblioteca do React e ReactDOM (para renderizar os componentes no DOM).
import React from 'react';
import ReactDOM from 'react-dom';

// Importa o componente criado passando seu diretório de origem
import SearchBar from './components/search_bar';

// API KEY Youtube
const API_KEY = 'AIzaSyCQUQ8BS6Xvi0owKSLjZ8AoWEDe5o_WD_8';

// Cria um novo componente utilizando JSX(<div></div>, neste caso) e ES6(arrow functions, neste caso)
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

// Renderiza o componente no DOM passando uma instância dele e onde queremos renderizá-lo
ReactDOM.render(<App />, document.querySelector('.container'));