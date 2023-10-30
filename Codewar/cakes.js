let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1500, sugar: 1200, eggs: 5, milk: 200};

function cakes(recipe, available) {
    
    
    for (const property in recipe) {
        if (available[property]===undefined) {
            return 0;
        }
        const possibleCakes = Math.floor(available[property]/recipe[property])
        return Math.min(possibleCakes)  
    }
    
  }

  console.log(cakes(recipe, available))