function myFunction<T>(args:T):T {
    return args;
}

const myFunction2 = <T>(args:T):T => {
    return args;
}

myFunction<number>(1);
myFunction<string>("hi!");

class MyClass<T> {
    private myField:T;

    constructor(myField:T) {
        this.myField = myField;
    }

    getMyField():T {
        return this.myField;
    }
}

const myClassString = new MyClass<string>("myFieldValueString");
const myClassNumber = new MyClass<number>(123);

interface IMyInterface<K, V> {
    key: K
    value:V
}


const pair:IMyInterface<string, number> = {
    key: "1",
    value: 1
}

type TypeLength = {
    length:number
}

function getLength<T extends TypeLength>(value: T):number {
    return value.length;
}


document.write(`
    ${myFunction<number>(1)}
    <br/>
    ${myFunction<string>("hi!")}
    <br/>
    ${myFunction2<number>(2)}
    <br/>
    ${myFunction2<string>("hi2!")}
    <br/>
    ${myClassString.getMyField()}
    <br/>
    ${myClassNumber.getMyField()}
    <br/>
    ${pair.key}:${pair.value}
    <br/>
    ${getLength("string")}
    <br />
    ${getLength([1, 2, 3, 4, 5])}
`);