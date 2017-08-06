// Importa o React para ser usado na intepretação do
// componente JSX (React transforma ele em React.createElement(...))
import React from 'react';

// Duas formas de criar um componente (function component e class component)
// EXPLICAÇÃO:
// Go with functional if your component doesn't do much more than take in some props and render.
// You can think of these as pure functions because they will always render and behave the same,
// given the same props. Also, they don't care about lifecycle methods or have their own internal state.
// Because they're lightweight, writing these simple components as functional components is pretty standard.
// If your components need more functionality, like keeping state, use classes instead.
// https://facebook.github.io/react/docs/components-and-props.html

// Exemplo de function component
// const SearchBar = () => {
// 	return <input />
// }

// Criamos uma class component e extendemos as funcionalidades do React para usar dentro da classe.
// É obrigatório usar o render()
class SearchBar extends React.Component {
	// State é um plain javascript object que existe em todos os componentes que são baseados em classes.
	// Cada instância de um componente baseado em classe tem sua própria cópia de states.
	// Nós inicializamos um state definindo o método construtor e declaramos o state com o this.state
	// Neste exemplo usamos o nome da propriedade do nosso state como term, mas pode ser qualquer outro nome
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input
					value={ this.state.term }
					onChange={ this.onInputChange.bind(this) } />
			</div>
		);
	}

	// Event handler para capturar o valor digitado no input de texto
	onInputChange(event) {
		return this.setState({ term: event.target.value });
	}
}

// Exporta o componentes criado para ser usado em outras partes da aplicação
export default SearchBar;