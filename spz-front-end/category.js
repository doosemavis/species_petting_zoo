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
            `
            <h4> Species: ${animal.name}</h4>
            <ul>Laymans Name: ${animal.layman}</ul>
            <ul>Age: ${animal.age}</ul>
            <ul>Extinct: ${animal.extinct}</ul>
            <br>
            ` 
        ).join("") 
    }
}

    // displayCreateAnimalForm() {
    //     let formDiv = document.querySelector("#new-animal-form")
    //     let html = `
    //         <form>
    //             <label>Species:</label>
    //             <input type="text" id="animal">
    //             <input type="text" id="layman">
    //             <input type="text" id="age">
    //             <input type="text" id="extinct">
    //             <input type="submit">
    //         </form>
    //     `
    //     formDiv.innerHTML = html
    //     document.querySelector('form').addEventListener('submit', createAnimal)
    // }

    // attachClicksToBtn() {
    //     let animals = document.querySelectorAll("li a")
    //     animals.forEach(animal => {
    //         animal.addEventListener('click', )
    //     })
    // }


    //     displayAnimal(e) {
    //         let id = e.target.dataset.id
    //         let main = document.getElementById('main')
    //         main.innerHTML += ""
    //         fetch(BASE_URL + `/categories/${id}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             let animal = new Animal(data)
    //             animal.renderCategory()
    //         })
    //     }