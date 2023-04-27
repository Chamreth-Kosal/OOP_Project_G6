import { Aeroplane } from "./aeroplane/Aeroplane";
import { Airport } from "./airport/Airport";
import { Gate } from "./airport/Gate";
import { Route } from "./airport/Route";
import { Chef } from "./human/Chef";
import { Crew } from "./human/Crew";
import { FlightAttendant } from "./human/FlightAttendant";
import { Passenger } from "./human/Passenger";
import { Pilot } from "./human/Pilot";
import { Meal } from "./meal/Meal";
import { Trip } from "./trip/Trip";

export class Flight{
    trip:Trip;
    passengers:Passenger[]=[];
    airport:Airport;
    gate:Gate;
    rout:Route;
    aeroplan:Aeroplane;
    meals:Meal[]=[];
    chefs:Chef[]=[];
    crews:Crew[]=[];
    pilots:Pilot[]=[];
    fightAttendants:FlightAttendant[]=[];
    constructor(flightNumber:string, date:Date, departureTime:string,arriveTime:string){}

}