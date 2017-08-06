// Importa a biblioteca do React e ReactDOM (para renderizar os componentes no DOM).
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importa o componente criado passando seu diretório de origem
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';

// API KEY Youtube
const API_KEY = 'AIzaSyCQUQ8BS6Xvi0owKSLjZ8AoWEDe5o_WD_8';



// Cria uma nova 'classe component' utilizando JSX(<div></div>, neste caso) e ES6(arrow functions, neste caso)
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		// Uma função que recebe um objeto de configuração e retorna os dados no seu callback.
		YTSearch({ key: API_KEY, term: 'surf' }, (data) => {
			this.setState({ videos: data });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={ this.state.videos } />
			</div>
		);
	}
}

// Renderiza o componente no DOM passando uma instância dele e onde queremos renderizá-lo
ReactDOM.render(<App />, document.querySelector('.container'));