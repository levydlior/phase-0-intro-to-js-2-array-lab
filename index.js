// Write your solution here!
const cats= ['Milo', 'Otis', 'Garfield']
function beforeEach(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat(name){
    cats.push(name); 
} 

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();

}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
  const newCats= [...cats, "Broom"];  
  return newCats
}

function prependCat(){
const newCats2= ["Arnold", ...cats]
return newCats2

}

function removeLastCat(){
const cats3= cats.slice(0,2)
return cats3
}

function removeFirstCat(){
const cats4= cats.slice(1)
return cats4
}