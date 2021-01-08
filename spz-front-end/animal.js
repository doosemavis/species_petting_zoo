class Animal {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.layman = data.layman;
        this.age = data.age;
        this.extinct = data.extinct; 
    }

    renderAnimal() {
        let main = document.getElementById('main')
        main.innerHTML += 
            `
            <h4> Species: ${this.name}</h4>
            <ul>Laymans Name: ${this.layman}</ul>
            <ul>Age: ${this.age}</ul>
            <ul>Extinct: ${this.extinct}</ul>
            <button class="delete-animal" data-id="${this.id}">Delete Species</button>
            <br>
            ` 
    }
}