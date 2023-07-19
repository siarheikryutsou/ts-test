type TypeInfo = {
    name:string
    id:number
}

type TypeInfoFunction = (name:string, id:number) => TypeInfo;

function getInfo(name:string, id:number):TypeInfo {
    return {
        name,
        id
    }
}

const getInfo2:TypeInfoFunction = (name, id):TypeInfo => {
    return {
        name,
        id
    }
}


const getNumbers = (...numbers:number[]) => {
    return numbers;
}

//Overloads

function getCar(name:string):string;
function getCar(name:string, price:number):string;

function getCar(name:string, price?:number):string {
    return price ? `Name: ${name}, Price: ${price}` : `Name: ${name}`;
}

const car1 = getCar("Mercedes");
const car2 = getCar("Lada", 1300);