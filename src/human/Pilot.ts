import { Employee } from "./Employee";
import {Flight} from "../Flight"
export class Pilot extends Employee{
    flight : Flight;
    constructor(public id:number, public name:string, public salary:number){
        super(id, name,salary);
    }


    isEqual(other:Pilot){
        return this.id == other.id && this.name == other.name && this.salary == other.salary;
    }
    getSalary(): number {
        return  this.salary;
    }
}