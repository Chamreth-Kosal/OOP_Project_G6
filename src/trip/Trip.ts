import { Flight } from "../Flight";
import { Passenger } from "../human/Passenger";
export class Trip{
    flights:Flight[]=[];
    passengers:Passenger[]=[];
    
    constructor(private direaction:string, private cost:number, private duration:number, private date:String){}

    addFlight(flight: Flight){
      this.flights.push(flight);
      flight.trips.push(this);
    }
  
    addPassenger(passenger: Passenger){
      this.passengers.push(passenger);
      passenger.trips.push(this);
    }

    
}
