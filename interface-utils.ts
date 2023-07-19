interface IMachine {
    id:number
    name:string
    price:number
    year:number
    color?:string
}

interface IMachineCreate extends Omit<IMachine, "id"> {} //exclude id
interface IMachineId extends Pick<IMachine, "id"> {} //exclude all except id
interface IMachinePartial extends Partial<IMachine> {} //optional fields
interface IMachineRequired extends Required<IMachine> {} //all fields required
interface IMachineReadOnly extends Readonly<IMachine> {}

type TypeMachineRecord = Record<"name" | "price", string | number>

const machineCreate:IMachineCreate = {
    name: "T-500",
    price: 100,
    year: 1980
}

const machineId:IMachineId = {
    id: 1
}

const machinePartial:IMachinePartial = {}

const machineRequired:IMachineRequired = {
    id: 3,
    name: "T-550",
    year: 1982,
    price: 200,
    color: "black"
}

const machineReadonly:IMachineReadOnly = {
    id: 2,
    name: "T-600",
    year: 1983,
    price: 300
}

const machineRecord:TypeMachineRecord = {
    name: "T-700",
    price: 400
}