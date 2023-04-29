import { Gate } from "../Airline/Gate";
import {Flight} from "../Flight";
import { Layout } from "./Layout";
export class Aeroplane{
    gate:Gate;
    flights: Flight[] = [];
    layouts :Layout[]=[];
    constructor(private registerNumber:number, private code: string){
    }
    
    addFlight(flight:Flight){
        this.flights.push(flight);
    }

    addLayout(layout:Layout){
        this.layouts.push(layout)
    }

}
