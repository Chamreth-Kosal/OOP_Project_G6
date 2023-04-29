import {Gender} from "./Gender"
import {Flight} from "../Flight";
import {Trip} from "../trip/Trip"
export class Passenger{
    genders: Gender;
    flights : Flight[]=[];
    trips : Trip[]=[];
    constructor(private name:string, private age:number, private phone:string, private gender:Gender,public hasReturnTicket:boolean){}

    addFlight(flight:Flight){
      this.flights.push(flight);
      flight.passengers.push(this);
    }

    addTrip(trip: Trip){
      this.trips.push(trip);
      trip.passengers.push(this);
    }

    getFlight(){
      return this.flights;
    }

}
