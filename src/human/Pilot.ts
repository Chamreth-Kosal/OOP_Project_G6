import { Employee } from "./Employee";
import {Flight} from "../Flight"
export class Pilot extends Employee{
    flight : Flight;
    constructor(id:number, name:string, age:number, phone:string, address:string){
        super(id, name, age, phone,address);
    }
}