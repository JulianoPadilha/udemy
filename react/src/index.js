// Importa a biblioteca do React e ReactDOM (para renderizar os componentes no DOM).
// ES6 TIP: Import destructuring no Component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importa o componente criado passando seu diretório de origem
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// API KEY Youtube
const API_KEY = 'AIzaSyCQUQ8BS6Xvi0owKSLjZ8AoWEDe5o_WD_8';

// Cria uma nova 'class component' utilizando JSX(<div></div>, neste caso) e ES6(arrow functions, neste caso)
class App extends Component {
	// Sempre que criar uma 'class component' adicionar o método construtor e o super com as props
	constructor(props) {
		super(props);
		// state é um objeto que trata o estado da aplicação
		this.state = { videos: [] };

		// Uma função que recebe um objeto de configuração e retorna os dados no seu callback.
		// Essa função foi colocado dentro do construtor para quando a aplicação inicializar já trazer os dados
		YTSearch({ key: API_KEY, term: 'green day' }, (data) => {
			// ES6 TIP: Se o nome da propriedade e seu valor fossem o mesmo, poderíamos usar a seguinte sintaxe:
			// this.setState({ videos }) que equivale a -> this.setState({ videos: videos })
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

