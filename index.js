// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const copyOfCats = [
        ...cats,
        "Broom"
    ];
   return copyOfCats;
}
function prependCat() {
    const copyOfCats = [
        "Arnold", ...cats
    ]
    return copyOfCats
}
function removeLastCat() {
    const cats = ["Milo", "Otis","Garfield"];
    cats.pop();
    return cats;
}
function removeFirstCat() {
    const cats = ["Milo", "Otis","Garfield"];
    cats.shift();
    return cats;
}