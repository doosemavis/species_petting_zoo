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
        main.innerHTML += `
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
    // fetch(BASE_URL + '/categories')
    // .then(res => res.json())
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
    })
}
