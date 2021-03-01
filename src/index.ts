import {Match} from "./Match";
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// Test Number 1
let m = new Match("player one", "player two");
m.pointWonBy("player One");
m.pointWonBy("player Two");
console.log(m.score());

// Test Number 2
m.pointWonBy("player One");
m.pointWonBy("player One");
console.log(m.score());


// Test Number 3
m.pointWonBy("player Two");
m.pointWonBy("player Two");
console.log(m.score());


//Test Number 4
m.pointWonBy("player One");
console.log(m.score());

// Test Number 5
m.pointWonBy("player One");
console.log(m.score());


// Test Number 6
m.pointWonBy("player One");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");