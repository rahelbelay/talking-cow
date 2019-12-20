
const Cowsay = require('cowsay');
//const words = process.argv.slice(2).join(' ');
const moo = require('./moo');

const theCowSaid = Cowsay.say({
    text : words,
	e : "xx",
	T : "X"
})
const {printContents, printSentiment} = require('./printer')
console.log(theCowSaid);

// Bonus
const words = process.argv.slice(2).join(' ');
const theCowSaid = Cowsay.say({
    text : words,
    e : process.argv[2],
    T : process.argv[3]
})
// console.log(theCowSaid)


//const words = process.argv.slice(2).join(' ');
const eye = process.argv[2]
const tongue = process.argv[3]
const words = process.argv[4]

const theCowSaid = Cowsay.say({
    text : words,
    e : eye,
    T : tongue
    
})

console.log(moo(words, eye, tongue))
//console.log(theCowSaid)





