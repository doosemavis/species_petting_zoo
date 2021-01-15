class Category {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.animals = data.animals; 
    }

    renderCategory() {
        let main = document.getElementById('main')
        main.innerHTML = `
        <h3> Genus: ${this.name}</h3>
        <button id="animal-form" data-id="${this.id}">Add Species</button>
        <hr>
        <br>
        `
        main.innerHTML += this.animals.map(animal => 
            `<div class="animal" id="${animal.id}">
                <h4> Species: ${animal.name}</h4>
                <ul>Common Name: ${animal.layman}</ul>
                <ul>Age: ${animal.age}</ul>
                <ul>Extinct: ${animal.extinct}</ul>
                <button class="delete-animal" data-id="${animal.id}">Delete Species</button>
                <br>
            </div>
            `
        ).join("") 
    }
}

