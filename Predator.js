var Predator = (function () {
  var carnivores = [];
  var herbivores = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {

        carnivores = JSON.parse(this.responseText);
        callbackToInvoke(carnivores);

      });
      loader.open("GET", "carnivores.json");
      loader.send();

    },

      loadHerbivores: function(callbackToInvoke){
        let loader = new XMLHttpRequest();

        loader.addEventListener("load", function () {

         herbivores  = JSON.parse(this.responseText);
        callbackToInvoke(herbivores);
        });
        loader.open("GET", "herbivores.json");
        loader.send();
      }

  }
})();

// Set the value of the private array
// Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.