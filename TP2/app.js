// API à utiliser pour le travail: https://randomuser.me/api/?results=5

// J'ai remplacé la photo par le ID car
// la liste USERS jsonplaceholder n'a pas de photo
// 10 au lieu de 5 pour la meme raison

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let output = "<h2>TP2</h2>";
    data.forEach(function (element) {
      output += element.id + "<br/>";
      output += element.name + "<br/>";
      output += element.email + "<br/>";
    });
    document.getElementById("user").innerHTML = output;
    console.log(data);
  });
