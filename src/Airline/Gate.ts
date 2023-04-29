import {Flight} from "../Flight";
import { Airport } from "./Airport";
export class Gate{
    flight:Flight;
    airport:Airport;
    constructor(public gateNumber:string){}

    getGateNumber(): string {
        return this.gateNumber;
    }

}