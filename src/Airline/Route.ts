import {Flight} from "../Flight";
export class Route{
    flight :Flight;
    constructor(private RouteNumber:number, private startTime:number, private endTime:number){}
}