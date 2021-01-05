const BASE_URL = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded", () => {
    getCategories()
})

function getCategories() {
    let main = docucment.getElementById('main')
    fetch(BASE_URL + '/categories')
    .then(res => res.json())
    .then(categories => {
        
    })
}