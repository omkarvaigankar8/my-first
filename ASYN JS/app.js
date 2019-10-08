/* const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log(request.status);
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
request.send();


 */
//call back functions
/* const todos = callback => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback(request.staturs, undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};
console.log(1);
console.log(2);
//todos((err, data) => {
  console.log("FIRED!!!!!!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log(3);
console.log(4);
 */

//json data

fetch("todos.json")
  .then(response => {
    console.log("resloved", response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("rejected", err);
  });
