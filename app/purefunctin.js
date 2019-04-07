// Pure Function
function add (a, b) {
  return a + b;
}


// Not a pure function
var a = 3;
function add (b) {
  return a + b;
}

// Not a pure function
var result;
function add (a, b) {
  result = a + b;
  return result;
}

// Not a pure function
function add (a, b) {
  return a + b + new Date().getSeconds();
}


function changeProp (obj) {
  // ES6
  return {
   ...obj,
   name: 'Jen'
  };


  //obj.name = 'Aslam';
  //return obj;
}
var startingValue = {
  name: 'Atif',
  age: 25
};

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);
