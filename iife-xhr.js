var carnivores = document.getElementbyId(carnivores);
function showCarnivores (carnivores) {
console.log(carnivores);
}

var herbivores = document.getElementbyId(herbivores);
function showHerbivores (herbivores) {
console.log(herbivores);
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores)


