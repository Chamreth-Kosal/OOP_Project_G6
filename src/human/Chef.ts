import { Employee } from "./Employee";
import {Flight} from "../Flight"
export class Chef extends Employee{
    flight : Flight;
    constructor(public id:number, public name:string, public salary:number){
        super(id, name, salary);
    }
    Salary(){
        return this.salary
    }
}
