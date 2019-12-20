
const Cowsay = require('cowsay');
function moo(words, eye, tongue){
    return Cowsay.say({text: words, e: eye, T: tongue})
}

//console.log(moo(words,eye,tongue))
//console.log(moo('hey', 'am', 'cow'))


module.exports = moo
       
