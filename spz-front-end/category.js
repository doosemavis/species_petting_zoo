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
        <hr>
        <br>
        `
        main.innerHTML += this.animals.map(animal => 
            `
            <h4> Species: ${animal.name}</h4>
            <li>Laymans Name: ${animal.layman}</li>
            ` 
        ).join("") 
    }
}
