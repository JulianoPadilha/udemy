# udemy
Cursos feito no Udemy

## Javascript ES6 - Exercício

Moving Away from For Loops

The code below is calling 'savePost' three times, but it is doing so using a for loop.  This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  Rather than using a for loop, refactor the code below to instead use the forEach helper.

```js
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
```

### Result

```js
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    function adder(post) {
        savePost(post);
    }
    
    posts.forEach(adder);
}
```

Processing Values

The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.

```js
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
```

### Result

```js
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
    areas.push(image.height * image.width); 
});
```
