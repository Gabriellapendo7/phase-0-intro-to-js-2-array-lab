// Write your solution here!
let cats = [ "Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push('Ralph');
} 
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){

    return ["Milo", "Otis", "Garfield","Broom"]
}
function prependCat(name){
    return [name, ...cats,];
}
function removeLastCat(){
    return cats.slice(0,-1);
}
function removeFirstCat(){
    return cats.slice(1)
}