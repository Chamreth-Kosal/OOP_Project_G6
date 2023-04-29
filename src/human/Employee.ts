import { Airline } from "../Airline/Airline";

export abstract class Employee{
    airline: Airline;
    employees: any;
    constructor(public id:number, public name:string, public salary:number){}
}
