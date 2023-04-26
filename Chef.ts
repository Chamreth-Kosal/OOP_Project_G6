import { Employee } from "./Employee";

export class Chef extends Employee{
    constructor(id:number, name:string, age:number, phone:string, address:string){
        super(id, name, age, phone,address);
    }
}
