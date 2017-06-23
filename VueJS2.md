# udemy
Cursos feito no Udemy

## Vue JS 2 - The Complete Guide

Site oficial: [https://vuejs.org/](https://vuejs.org/)

### Section 1, Lecture 2
Primeiro exemplo do uso do Vue JS.

[Primeiro exemplo em Vue JS - Codepen](https://codepen.io/julianopadilha/pen/QgMwbz?editors=1010)

```html
<!--CDN-->
<script src="https://unpkg.com/vue@2.3.4"></script>


<div id="app">
<!--Uso de interpolação para acessar o valor da propriedade criada-->
  <p>{{ title }}</p>
</div>
```

```js
//Cria uma nova instância do Vue e passa algumas propriedades

//el é uma propriedade reservada que serve para declarar qual o contexto/escopo que o Vue usará

//data é uma propriedade reservada que recebe um objeto onde é declara as propriedades que serão usadas na view da aplicação

new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
  }
});
```

### Section 1, Lecture 3

```html
<script src="https://unpkg.com/vue@2.3.4"></script>

<div id="app">
<!--Crio um input para receber dados. Uso a diretiva v-on com o evento 'input' passando a função que desejo realizar-->
  <input type="text" v-on:input="changeTitle" />
  <p>{{ title }}</p>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
  },
  
  //methods é uma propriedade reservada que recebe um objeto e serve para declarar métodos/funções
  methods: {
    changeTitle(event){
      this.title = event.target.value;
    },
  }
});
```
