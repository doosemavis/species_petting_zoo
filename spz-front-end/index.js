const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('category-form').addEventListener('click', displayCreateForm)
    document.getElementById('categories').addEventListener('click', getCategories)
    getCategories()
})


function displayCreateForm() {
    let formDiv = document.querySelector("#new-category-form")
    let html = `
        <form>
            <label>Genus:</label>
            <input type="text" id="category">
            <input type="submit">
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createCategory)
}


function getCategories() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    fetch(BASE_URL + '/categories')
    .then(res => res.json())
    .then(categories => {categories.map(category => {
        main.innerHTML += `
        <li>
        <a href="#" data-id="${category.id}">${category.name}</a>
        </li>
        `
        })
        attachClicksToLinks()
    })
}

function attachClicksToLinks() {
    let categories = document.querySelectorAll("li a")
    categories.forEach(category => {
        category.addEventListener('click', displayCategory)
    })
}

function displayCategory(e) {
    console.log(e.target)
    let id = e.target.dataset.id
    let main = document.getElementById('main')
    main.innerHTML += ""
    fetch(BASE_URL + `/categories/${id}`)
    .then(resp => resp.json())
    .then(data => {
        let category = new Category(data)
        category.renderCategory()
    })
}








// class Category {
//     constructor(data) {
//         this.id = data.id;
//         this.name = data.name;
//         this.animals = data.animals; 
//     }

//     renderCategory() {
//         let main = document.getElementById('main')
//         main.innerHTML = `
//         <h3>${this.name}</h3>
//         <hr>
//         <br>
//         <p>${this.animals}</p>
//         `
//         category.animals.forEach
//     }
// }
