import {Gender} from "./Gender"
import {Flight} from "../Flight";
import {Trip} from "../trip/Trip"
export class Passenger{
    genders: Gender;
    flights : Flight[]=[];
    trip : Trip[]=[];
    constructor(private name:string, private age:number, private phone:number, private gender:string ){}
}
