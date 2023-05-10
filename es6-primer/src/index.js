

import logger, { appName, dummyFunction, Person } from './tools.js';

/* 
console.log("Welcome to es6-primer")

logger("Hero time in index")

logger(`There exist a name ${appName}.
There also exist a dummy function look::> ${dummyFunction()}`) */
/* 
new Promise((resolve,) => { }
)
new Promise(
    (good, reject) => {
        setTimeout(() => { good("timeout is over"); }, 1000);
    }
).then((data) => { logger(`${data}`) }).catch((error) => { logger(`${error}`) })
 */

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
    one: "ONE", two: "TWO"
}

logger(OBJ_literal.one);



// function declatarion in old JS
var standard_func = function () { console.log("Standard Javascript function") }
// arro function declaration in new   
var fancy_arrow_func = () => { console.log("Special Arrow function") }
var test = one => { logger(`using template literals -- ${one}`) }

// constants can not be changed
const one = 1;

// variables can be changed

var variable = 2;
variable = 3;

let ecma_variable = 10;
ecma_variable = 14;

test("Hello world")
try { logger(multiplyer(0)) }
catch (error) {
    logger(`${error.message}`)
}
logger(" HERO")


let person1 = new Person("Clement", "OBIEKE", "Male", 7)

person1.firstName = "Shadow"


new Promise(
    (good, bad) => {
        setTimeout((good("Hero time like I proimised"), 3000))




        // setTimeout(() => { good("Hero time like I prommised") }, 3000)
    }
).then((success) => { logger(`The quote of the hero who said he would return ${success}`); }, (fail) => { logger(`${fail} `) })//.catch((error) => { logger(`The hero did not return \"${error}\"`) })


//fetch is called here
fetch('https://jsonplaceholder.typicode.com/users/3').then((data) => {
    logger(`Retrieved the following`);
    return data.json()
}, (error) => { }).then((data) => { logger(`Id = ${data.id} \nName = ${data.name} \ne-mail = ${data.email}\nuser location = ${data.address.geo.lat},${data.address.geo.lng} `) })

//fetch is not actually called here
const fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(Response => Response.json())
const fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(Response => Response.json())
const fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(Response => Response.json())

Promise.all([fetch1, fetch2, fetch3])
    .then((data) => { logger(`User 1 = ${data[0].name}; User 1 = ${data[1].name}; User 1 = ${data[2].name}`) })


const somePromiseFuncion = (variable) => {
    return new Promise((resolve, reject) => {
        setTimeout((resolve) => resolve('The promise function worked'))
    }).then(() => { }).catch()
}

const useSomePromiseFucntion = async (miliseconds) => {
    try {
        const fetch1 = await fetch('https://jsonplaceholder.typicode.com/users/1')
        
    }
    catch (error) {
        logger(`An Error occured ${error}`)
    }
}

useSomePromiseFucntion(4000)