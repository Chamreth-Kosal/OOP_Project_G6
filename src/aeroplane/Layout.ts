import { Aeroplane } from "./Aeroplane";
import {Seat} from "./Seat";
export class Layout{
    aeroplane: Aeroplane;
    seats:Seat[]=[]
    constructor(private row:number, private column:number){}
}