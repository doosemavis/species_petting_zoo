const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded", () => {
    getCategories()
})

function getCategories() {
    let main = docucment.getElementById('main')
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
    categories.forEach(todo => {
        category.addEventListener('click', displayCategory)
    })
}

function displayCategory(e) {
    console(e.target)
}
