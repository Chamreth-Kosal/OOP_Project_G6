import { Employee } from "./Employee";
import {Flight} from "../Flight"

export class FlightAttendant extends Employee{
    flight: Flight;
    constructor(public id:number,public name:string, public salary:number){
        super(id, name, salary);
    }
    getSalary(): number {
        return this.salary
    }
}