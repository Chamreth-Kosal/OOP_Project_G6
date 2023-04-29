import {Gender} from "./Gender"
import {Flight} from "../Flight";
import {Trip} from "../trip/Trip"
import { Meal } from "../meal/Meal";
export class Passenger{
    meal:Meal;
    genders: Gender;
    flights : Flight[]=[];
    trips : Trip[]=[];
    constructor(private name:string, private age:number, private gender:Gender,public hasReturnTicket:boolean){}

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

    getMeals(){
      let listMeal:number=0;
      if (this.meal.getMealType()){
          return listMeal +=1;
      }
  }

}
