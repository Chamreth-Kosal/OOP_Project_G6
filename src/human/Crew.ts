import { Employee } from "./Employee";
import {Flight} from "../Flight"
export class Crew extends Employee{
    flight : Flight;
    constructor(id:number, name:string, public salary:number){
        super(id, name, salary);
    }
}
   
