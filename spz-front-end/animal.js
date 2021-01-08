// class Animal {
//     constructor(data) {
//         this.id = data.id;
//         this.name = data.name;
//         this.layman = data.layman;
//         this.age = data.age;
//         this.extinct = data.extinct; 
//     }

//     renderAnimal() {
//         let main = document.getElementById('main')
//         main.innerHTML += this.animals.map(animal => 
//             `
//             <h4> Species: ${animal.name}</h4>
//             <ul>Laymans Name: ${animal.layman}</ul>
//             <ul>Age: ${animal.age}</ul>
//             <ul>Extinct: ${animal.extinct}</ul>
//             <br>
//             ` 
//         ).join("") 
//     }
// }