// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokeArr){

    if (pokeArr.length === 0) {
        return 0;
    } 

    let filteredArr = pokeArr.filter(function(poke){
        if(poke.type.includes("Fire")){
            return true;
        }
    });
    
    return filteredArr;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
// function shortestPokemon(pokeArr){


function shortestPokemon(pokeArr){

    if (pokeArr.length === 0) {
        return 0; 
    } 


    let shortestHeight = Infinity;   // default variable that's gonna be returned later
    let shortestPokeName = "";

    let mappedArr = pokeArr.map(function(singlePoke){
        if(parseFloat(singlePoke.height) < shortestHeight){
            shortestHeight = parseFloat(singlePoke.height);
            shortestPokeName = singlePoke.name;
        }
    });

    return shortestPokeName;
    
    // let shortestHeight = Infinity;   // default variable that's gonna be returned later
    // let shortestPokeName = "";

    // pokeArr.forEach(function(singlePoke){
    //     if(parseFloat(singlePoke.height) < shortestHeight){
    //         shortestHeight = parseFloat(singlePoke.height);
    //         shortestPokeName = singlePoke.name;
    //     }
    // });

    // return shortestPokeName;
}



// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

const candyAverage = function(pokeArr){

    if (pokeArr.length == 0) {
        return 0;
    }

    let totalCandies = pokeArr.reduce(function(sum, singlePoke){
        if (singlePoke.candy_count) {
            return sum + singlePoke.candy_count;
        }
       else {
           return sum;
       }
    }, 0);
    
    let average = totalCandies/pokeArr.length;
    return Number(average.toFixed(2));

};

// Iteration 4: images for the first 10 `Ground`  Pokemons

// function getGroundPokeImg(pokeArr){

//     if (pokeArr.length == 0) {
//         return 0;
//     }

//     let groundPoke = pokeArr.filter(function(singlePoke){
//         if (singlePoke.type.includes("Ground")) {
//             return singlePoke;
//         }    
//     });

//     let pokeImg = groundPoke.map(function(singlePoke){
//             return singlePoke.img;      
//     });

//     console.log(pokeImg);
//     return pokeImg.slice(0,10);
// }

// use forEach

function getGroundPokeImg(pokeArr){
    let placeholder = [];

    if (pokeArr.length == 0) {
        return 0;
    }

    pokeArr.forEach(function(singlePoke){
        if(singlePoke.type.includes("Ground")){
        placeholder.push(singlePoke.img);
        };
    });

    return placeholder.slice(0,10);
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokeArr){
    let namesArr = [];

    if (pokeArr.length == 0) {
        return 0;
    }
// get Pikachus weight

    let weightPikachu = pokeArr.map(function(singlePoke){
        if(singlePoke.name.includes("Pikachu")){
            return singlePoke.weight;
        }
    });

// get Pokemon that are heavier than Pikachu

    pokeArr.forEach(function(singlePoke){
        if(parseFloat(singlePoke.weight) > parseFloat(weightPikachu)){
            namesArr.push(singlePoke.name);
        }
    });
    console.log(namesArr);
    return namesArr;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokeArr){
    
    if (pokeArr.length == 0){
        return 0;
    }

    let clonedArr = JSON.parse(JSON.stringify(pokeArr));
    clonedArr.sort(function(first,second){
        if (first.name > second.name){
            return 1;
        }
        else if (first.name < second.name) 
            return -1;
        else {
            return 0;
        }
    });

    // create array of only the names

    let names = clonedArr.map(function(singlePoke){
        return singlePoke.name;
    });

    return names.slice(0,20);
}


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 


function strongPokemons(pokeArr){
    
    if (pokeArr.length == 0){
        return 0;
    }

    // let lengthWeakness = pokeArr.map(function(singlePoke){
    //     return singlePoke.weakness.length;
    // });

    let clonedArr = JSON.parse(JSON.stringify(pokeArr));

    function sortbyLength (clonedArr) {
        return clonedArr.sort ( (first, second) => first.weakness.length - second.weakness.length);

        // if (first.weakness.length < second.weakness.length){
        //     return 1;
            
        // }
        // else if (first.weakness.length > second.weakness.length) 
        //     return -1;
        // else {
        //     return 0;
        // }
       
    }

    // create array of only the names

    let names = clonedArr.map(function(singlePoke){
        return singlePoke.name;
    });
    //console.log(names);
    return names.slice(0,15);
}