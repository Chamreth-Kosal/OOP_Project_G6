import {Flight} from "../Flight";
import { Pilot } from "../human/Pilot";
import {Gate} from "./Gate";
export class Airport{
    flights : Flight[]= [];
    gates : Gate[]=[];
    constructor(private name:string, private code:string, private address:string){}

    getFlights(pilot: Pilot, date: string): Flight[] {
        let flights: Flight[] = [];
        for (let flight of this.flights) {
          for(let pilot of flight.pilots){
            if (flight.date === date && pilot.isEqual(pilot)) {
                flights.push(flight);
            }
          }
        }
        return flights;
    }

    addFlight(flight:Flight){
        this.flights.push(flight)
    }

    addGate(gate:Gate){
        this.gates.push(gate);
    }

    getGateForFlight(flightNumber: string): Gate | undefined {
        for (let gate of this.gates) {
          if (gate.flight && gate.flight.flightNumber === flightNumber) {
            return gate;
          }
        }
        return undefined;
      }
}
