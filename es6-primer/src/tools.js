const logger = (output) =>
{
    console.log(output);
}

export default logger
export const appName = "ES6 Review";

export const dummyFunction = () =>
{
    let feedback = "I am funny"
    feedback = "I an no longer funny"
    return feedback
}
export const genericfucntion = () =>
{
    const languages = ['Python','Javascript','Java','C++','C#']
    const [firstlang, secondlang] = languages;
    return `First language is ${firstlang} and the second is ${secondlang}`

    

}  
 

export const genericfucntion2 = () =>
{
    const languages = ['Python','Javascript','Java','C++','C#']
    const [firstlang, secondlang,...otherlang] = languages;
    return `First language is ${firstlang} and the second is ${secondlang}` +
        ` And other languages are ${otherlang}        `
    

}  
export const genericfucntion3 = () =>
{
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


export const genericfucntion4 = (a, b = 1) => { 

    return (a * b);
}
export const multiplyer = (...num) =>
{
    let product = 1;
    if (num.length < 2)
    {
        throw new Error('Number of arguments must be greater than 2')
     }
    for (let i = 0; i < num.length; i++) {
        product *= num[i];
        
    }
    return product;
}
 
export const genericfucntion5 = (m, c, ...x) => {
    let coordinates = x.map((x) => { return { 'x': x, 'y': x * m + c }; }
    )
    let output = 'The (x,y) are '
    for (let coords of coordinates)
    { 

        let xy = `(${coords.x},${coords.y})`
        output += xy
     }
}
 
export class FirstClass{ 
    constructor(name, age){ 
    this.name = name; 
    this.age = age; 
    } 
}
   
const toTitleCase = (str) => { 
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
   }

 export  class Person{ 
    constructor(firstName, lastName, gender,height){ 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.gender = gender; 
    this.height = height;
    } 
}
   
export class staticClass{
    static random_function() {
        return "Random function"
    }
}
// No need to initialize classes cause the class is static
// A single static fuction is enough to make the entire class static
export class CustomMath { 
    static sqrt(a) {
        Math.sqrt(a);
     }
}

export class parent { 
    constructor(Name, Age, Gender)
    {
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
     }
}

export class child extends parent { 
    constructor(Name, Age, Gender,favourite_toy)
    {
        super(Name, Age, Gender);
        this.favourite_toy = favourite_toy;
     }
}