import { Aeroplane } from "./aeroplane/Aeroplane";
import { Airport } from "./Airline/Airport";
import { Gate } from "./Airline/Gate";
import { Chef } from "./human/Chef";
import { Crew } from "./human/Crew";
import { FlightAttendant } from "./human/FlightAttendant";
import { Passenger } from "./human/Passenger";
import { Pilot } from "./human/Pilot";
import { Meal } from "./meal/Meal";
import { Trip } from "./trip/Trip";
import { Airline } from "./Airline/Airline";

export class Flight{
    trips:Trip[]=[];
    airline:Airline;
    passengers:Passenger[]=[];
    airport:Airport;
    gate:Gate;
    aeroplan:Aeroplane;
    meals:Meal[]=[];
    chefs:Chef[]=[];
    crews:Crew[]=[];
    pilots:Pilot[]=[];
    fightAttendants:FlightAttendant[]=[];
    constructor(public flightNumber:string, public date:string, private departureTime:string,private arriveTime:string){}
    
    addPassenger(passenger:Passenger){
      this.passengers.push(passenger);
      passenger.flights.push(this);
    }

    addTrip(trip: Trip){
      this.trips.push(trip);
      trip.flights.push(this);
    }

    getPassenger(){
      return this.passengers;
    }

    addPilot(pilot:Pilot){
        this.pilots.push(pilot);
    }
    addCrew(crew:Crew){
        this.crews.push(crew);
    }

    addChef(chef:Chef){
        this.chefs.push(chef);
    }

    addFlightAttendant(flightAttendant:FlightAttendant){
        this.fightAttendants.push(flightAttendant);
    }

    getGate(): Gate {
      return this.gate;
    }

    getFlightNumber(): string {
      return this.flightNumber;
    }

    assignGate(gate: Gate) {
      this.gate = gate;
      gate.flight = this;
    }
  
    getPassengerReturnTicket(): number {
      let returnTicketCount = 0;
      for (const passenger of this.passengers) {
        if (passenger.hasReturnTicket) {
          returnTicketCount++;
        }
      }
      return returnTicketCount;
    }
    
    getMeals(){
      let listMeal = [];
      for (let passengers of this.meals){
        listMeal.push(passengers["type"]);
        
    }
    return listMeal
  }

}
  