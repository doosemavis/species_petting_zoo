class Category {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.animals = data.animals; 
    }

    renderCategory() {
        let main = document.getElementById('main')
        main.innerHTML = `
        <h3>${this.name}</h3>
        <hr>
        <br>
        <p>${this.animals}</p>
        `
        category.animals.forEach
    }
}
