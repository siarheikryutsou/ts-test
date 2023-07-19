type TypeUser = {
    name:string,
    age:number
}

type TypeAddress = {
    city:string,
    country:string
}

const user:TypeUser = {
    age: 24,
    name: "Petya"
}

const address:TypeAddress = {
    city: "Bobruisk",
    country: "Belarus"
}

let userInfo:TypeUser & TypeAddress;

userInfo = {
    ...user, ...address
}