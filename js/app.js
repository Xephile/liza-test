const coasters = document.getElementById("coaster-option");
const cakestand = document.getElementById("cakestand-option");
const flower = document.getElementById("flower-option");
const keepsakes = document.getElementById("keepsakes-option");
const pet = document.getElementById("pet-option");
const trays = document.getElementById("trays-option");

const all = document.getElementById("all");


const products = document.getElementsByClassName("img-container");

const coasterProducts = document.getElementsByClassName("coaster");
const cakestandProducts = document.querySelectorAll(".cakestand");
const keepsakesProducts = document.querySelectorAll(".keepsakes");
const petProducts = document.querySelectorAll(".pet");
const flowerProducts = document.querySelectorAll(".flower");
const traysProducts = document.querySelectorAll(".trays");




all.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("show")
    }
})


// COASTER
coasters.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("coaster")) {
            products[i].classList.add("show")
        } else {
            products[i].classList.add("hide")
            products[i].classList.remove("show")
        }
    }
})

// CAKESTAND
cakestand.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("cakestand")) {
            products[i].classList.add("show")
        } else {
            products[i].classList.add("hide")
            products[i].classList.remove("show")
        }
    }
})

// TRAYS
trays.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("trays")) {
            products[i].classList.add("show")
        } else {
            products[i].classList.add("hide")
            products[i].classList.remove("show")
        }
    }
})


// PETS
pet.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("pet")) {
            products[i].classList.add("show")
        } else {
            products[i].classList.add("hide")
            products[i].classList.remove("show")
        }
    }
})

// FLOWERS
flower.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("flower")) {
            products[i].classList.add("show")
        } else {
            products[i].classList.add("hide")
            products[i].classList.remove("show")
        }
    }
})

// KEEPSAKES
keepsakes.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("keepsakes")) {
            products[i].classList.add("show")
        } else {
            products[i].classList.add("hide")
            products[i].classList.remove("show")
        }
    }
})

