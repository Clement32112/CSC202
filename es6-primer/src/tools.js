//Classical Javascript function definition uses the keyword function




/* var logger = function (output) {
    console.log(output)
}
*/

//Bloody arrow functions.
var logger = (output) => { console.log(output) }

/* 
logger("Hero time")
logger("Hero time once again") */

export default logger;
export var appName = "ES6 Review";


/* export var dummyFunction = function () {
    return ("inside dummy function")
} */

//Bloody arrow fuctiion
export const dummyFunction = () => {
    let feedback = "I am funny"
    feedback = "I an no longer funny"
    return feedback
}





export const genericfucntion = () => {
    const languages = ['Python', 'Javascript', 'Java', 'C++', 'C#']
    const [firstlang, secondlang] = languages;
    return `First language is ${firstlang} and the second is ${secondlang}`



}


export const genericfucntion2 = () => {
    const languages = ['Python', 'Javascript', 'Java', 'C++', 'C#']
    const [firstlang, secondlang, ...otherlang] = languages;
    return `First language is ${firstlang} and the second is ${secondlang}` +
        ` And other languages are ${otherlang}        `


}
export const genericfucntion3 = () => {
    const personalInformation = {
        firstName: 'Clement',
        lastName: 'Obieke',
        gender: 'Male',
        religion: 'Christianity',
        fathersName: 'Christopher',
        mothersName: 'Ngozi'

    }

    let { firstName, lastName, ...otherpersonalinfo } = personalInformation;
    return `The first name is ${firstName} and the lastName is ${lastName}`
}





export const genericFunction4 = (...numbers) => {
    var product = 1;
    if (numbers.length < 2) {
        throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (let number of numbers) {
        product = product * number;
    }
    return product;
}

export const genericFunction5 = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed. 
    //Map the array of x into an array of {x,y} object, with the y value calculated each time. 
    let coordinates = x.map((x) => {
        return { 'x': x, 'y': (m * x) + c };
    })
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below 
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates) {
        let xy = `(${coordinate.x},${coordinate.y})`
        output += xy;
    }

    return output;
}





const toTitleCase = (str) => {
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
}
export class Person {
    constructor(firstName, lastName, gender, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height
    }
    getFirstName() {
        return toTitleCase(this.firstName)
    }
};

export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);

    }
    static pow(a, b) {
        return Math.pow(a, b);
    }
};

export class staticClass {
    static random_function() {
        return "Random function"
    }
}
// No need to initialize classes cause the class is static
// A single static fuction is enough to make the entire class static


export class parent {
    constructor(Name, Age, Gender) {
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
    }
}

export class child extends parent {
    constructor(Name, Age, Gender, favourite_toy) {
        super(Name, Age, Gender);
        this.favourite_toy = favourite_toy;
    }
}