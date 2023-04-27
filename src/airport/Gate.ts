import {Flight} from "../Flight";
import { Airport } from "./Airport";
export class Gate{
    flight:Flight;
    airport:Airport;
    constructor(private gateNumber:string,private area:string){}
}