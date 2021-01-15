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

function clearForm() {
    let formDiv = document.querySelector("#new-category-form")
    formDiv.innerHTML = ""
}


function createCategory(e) {
    e.preventDefault()
    let main = document.getElementById('main')
    let category = {
        name: e.target.querySelector("#category").value
    }
    let configObj = {
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(BASE_URL + '/categories', configObj)
    .then(res => res.json())
    .then(category => {
        main.innerHTML += 
        `
        <li>
        <a href="#" data-id="${category.id}">${category.name}</a>
        </li>
        `
        attachClicksToLinks()
        clearForm()
        }
    )
}

function getCategories() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    fetchCategories()
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

async function fetchCategories() {
    let res = await fetch(BASE_URL + '/categories')
    let data = await res.json()
    return data;
}


function attachClicksToLinks() {
    let categories = document.querySelectorAll("li a")
    categories.forEach(category => {
        category.addEventListener('click', displayCategory)
    })
}

function displayCategory(e) {
    let id = e.target.dataset.id
    let main = document.getElementById('main')
    main.innerHTML += ""
    fetch(BASE_URL + `/categories/${id}`)
    .then(resp => resp.json())
    .then(data => {
        let category = new Category(data)
        category.renderCategory()
        document.getElementById('animal-form').addEventListener('click', () => displayCreateAnimalForm(category.id))
        addEventsToDeleteBtns()
    })
}



// =============================================================================================== 



function displayCreateAnimalForm(categoryId) {
    let formDiv = document.querySelector("#new-animal-form")
    let html = `
        <form data-id="${categoryId}">
            <label>Species Name:</label>
            <input type="text" id="animal">
            <br>
            <label>Common Name:</label>
            <input type="text" id="layman">
            <br>
            <label>Age:</label>
            <input type="text" id="age">
            <br>
            <label>Extinct:</label>
            <input type="text" id="extinct">
            <br>
            <input type="submit">
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createAnimal)
}

function clearAnimalForm() {
    let formDiv = document.querySelector("#new-animal-form")
    formDiv.innerHTML = ""
}

function attachClicksToBtn() {
    let animals = document.querySelectorAll("li a")
    animals.forEach(animal => {
        animal.addEventListener('click', displayAnimal)
    })
}


function createAnimal(e) {
    e.preventDefault()
    let animal = {
        name: e.target.querySelector("#animal").value,
        layman: e.target.querySelector("#layman").value,
        age: e.target.querySelector("#age").value,
        extinct: e.target.querySelector("#extinct").value,
        category_id: e.target.dataset.id
    }
    let configObj = {
        method: 'POST',
        body: JSON.stringify(animal),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(BASE_URL + '/animals', configObj)
    .then(res => res.json())
    .then(animal => {
        let newAnimal = new Animal(animal)
        newAnimal.renderAnimal()
        attachClicksToBtn()
        clearAnimalForm()
        addEventsToDeleteBtns()
        }
    )
}

function removeAnimal(e) {
    let animalId = e.target.dataset.id
    let configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(BASE_URL + `/animals/${animalId}`, configObj)
    getCategories() 
}

function addEventsToDeleteBtns() {
    document.querySelectorAll('.delete-animal').forEach(btn => btn.addEventListener('click', removeAnimal))
}