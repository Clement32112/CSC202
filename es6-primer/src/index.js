import logger, { Person, multiplyer } from "./tools.js"

/* 
var a  = "welecome"
console.log(a);
*/

/* x = 5
if (x == 5) {
    console.log("Returning true")
}
else if (x > 5)
    console.log("x is greater than 5")
else { 
    console.log("x is less than 5")
} */
/* 
for (var i = 0; i < 11; i++)
    console.log(i);
 */

var OBJ_literal = {
    one: "ONE",two:"TWO"
}

logger(OBJ_literal.one);



// function declatarion in old JS
var standard_func = function(){console.log("Standard Javascript function") }
// arro function declaration in new   
var fancy_arrow_func = () => { console.log("Special Arrow function") }
var test = one => { logger(`using template literals -- ${one}`)}

// constants can not be changed
const one = 1; 

// variables can be changed

var variable = 2;
variable = 3;

let ecma_variable = 10;
ecma_variable = 14;

test("Hello world")
try { logger(multiplyer(0))}
catch (error)
{
    logger(`${error.message}`)
}
logger(" HERO")


let person1 = new Person("Clement", "OBIEKE", "Male", 7)

person1.firstName = "Shadow"
