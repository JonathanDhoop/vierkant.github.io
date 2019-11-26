let chance = function(chance){
    let number = Math.floor((Math.random() * chance) + 1);
    return number==1;
}
let playSound = function(path){
    let audio = new Audio(path);
    audio.play();
}
let addElement = function(cssSelectorFromParent, elementToAdd, textInElement){
    $(cssSelectorFromParent).append("<"+elementToAdd+">"+textInElement+"</"+elementToAdd+">");
}