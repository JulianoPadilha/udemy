# udemy
Cursos feito no Udemy

## Javascript ES6 - Exercício

## forEach

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

## map

Plucking Values

Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!

```js
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;
```

### Result

```js
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});

heights;
```

Calculating Values with Map

Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.

```js
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;
```

### Result

```js
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});

speeds;
```

Really Hard - Implementing 'Pluck'

This is a hard one!
Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

Example: 

```js
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
```

Hint:

Remember that you can access a property on an object by using square bracket notation. For example...

```js
var person = { name: 'Bill' };
person['name'] // returns 'Bill'
```

```js
function pluck(array, property) {
    
}
```

### Result

```js
function pluck(array, property) {
    var newarr = array.map(function(arr){
        return arr[property];
    });
    
    return newarr;
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

pluck(paints, 'color');
```

## filter

Filtering Values

Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

```js
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
```

### Result

```js
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

filteredNumbers;
```

Handling Permissions with Filter

Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

```js
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;
```

### Result

```js
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

// Using a function
function filteredUsersFunction(user) {
    return user.admin;
}

// Using a function
var filteredUsers = users.filter(filteredUsersFunction);

var filteredUsers = users.filter(function(user) {
   return user.admin; 
});
```

Challenging! Implementing 'reject'.

This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.


For example:

```js
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];
```

```js
function reject(array, iteratorFunction) {
  
}
```

### Result

```js
function reject(array, iteratorFunction) {
  return array.filter(function(item){
      // Retornar todos os itens que forem falsos
      return !iteratorFunction(item);
  });
}
```

## find

Finding Admin Users

Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

```js
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
```

### Result

```js
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

function isAdmin(user) {
    return user.admin;
}

// Passing a function
var admin = users.find(isAdmin);

var admin = users.find(function(user){
    return user.admin;
});

admin;
```

What's Your Balance?

Find the account with a balance of 12 and assign it to the variable 'account'.

```js
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;
```

### Result

```js
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var positiveAccount = function(account) {
    return account.balance === 12;
}

var account = accounts.find(positiveAccount);

account;
```

Really Challenging: Custom findWhere Helper

This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:

```js
findWhere(ladders, { height: '20 feet' });
```
The object ```{ ladders: '20 feet' }``` should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';


Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

In summary:

```js
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
```

Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use ```Object.keys(criteria)[0]``` to figure out the name of the property on the object.  For example, ```Object.keys({ height: '20 feet' })``` would return ```'height'```.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like ```element[property] === criteria[property]```.

```js
function findWhere(array, criteria) {
  
}
```

### Result

```js
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  var key = Object.keys(criteria)[0];
  return array.find(function(item) {
      return item[key] === criteria[key];
  });
}

findWhere(ladders, {height: 25});
```

## every and some

Finding Submitted Users

Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

```js
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;
```

### Result

```js
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
});

hasSubmitted;
```

In Progress Network Requests

Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

```js
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;
```

### Result

```js
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending'
});

inProgress;
```

## reduce

Distance Traveled

Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

```js
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;
```

### Result

```js
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip){
    return previous += trip.distance;
}, 0);
```

Reducing Properties

Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

```js
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function() {
    
}, { sitting: 0, standing: 0 });
```

### Result

```js
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if(desk.type === 'sitting') { ++previous.sitting }
    if(desk.type === 'standing') { ++previous.standing }
    return previous;
}, { sitting: 0, standing: 0 });
```

Hardmode: Custom 'Unique' Helper

Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
```var numbers = [1, 1, 2, 3, 4, 4];```
Your function should return
```[1, 2, 3, 4]```
Hint: Use the 'reduce' and 'find' helpers.  

```js
function unique(array) {
  
}
```

### Result

```js
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array){
  
  return array.reduce(function(previous, current) {
     if(!previous.find(function(prevItem){
         return prevItem === current;
     })) {
        previous.push(current);
     }
     return previous;
  }, []);
}

unique(numbers);
```