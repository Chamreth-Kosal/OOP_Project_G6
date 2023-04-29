import { Flight } from "./Flight";
import { Aeroplane } from "./aeroplane/Aeroplane";
import { Layout } from "./aeroplane/Layout";
import { Seat } from "./aeroplane/Seat";
import { Airport } from "./Airline/Airport";
import { Gate } from "./Airline/Gate";
import { Gender } from "./human/Gender";
import { Passenger } from "./human/Passenger";
import { Pilot } from "./human/Pilot";
import { Trip } from "./trip/Trip";
import { Airline } from "./Airline/Airline";
import { FlightAttendant } from "./human/FlightAttendant";
import { Chef } from "./human/Chef";


//test

let passenger1 = new Passenger("navy", 20, Gender.FEMALE,true);
let passenger2 = new Passenger("tata", 20, Gender.MALE, true);

let trip1 = new Trip("PP",200, 2,"01-01-2023");
let trip2 = new Trip("PV",300, 2,"01-01-2022");

let pilot1 = new Pilot(1, "GOGO", 250);
let crew1 = new Pilot(1, "BI", 300);
let flightAttendant1 = new FlightAttendant(1, "GIGO", 500)
let chef1 = new Chef(1, "KAKA", 1000)

let gate1 = new Gate("1A");
let gate2 = new Gate("2A");

let airport1 = new Airport("AAA", "BB", "Singapor");

let plane1 = new Aeroplane(1, "nono");
let plane2 = new Aeroplane(2, "mo");

let layout1 = new Layout(1, 2);

let Seat1 = new Seat("1", "flex" );

let airline1 = new Airline("nana", 1);

let flight1 = new Flight("1A", "01/01/2023" ,"10", "1");
let flight2 = new Flight("2A", "01-01-2023" ,"10", "1");

airport1.addGate(gate1);
airport1.addGate(gate2);

airport1.addFlight(flight1);
airport1.addFlight(flight2);

flight1.addPassenger(passenger1);
flight1.addChef(chef1);
flight1.addFlightAttendant(flightAttendant1);
flight1.addPilot(pilot1);
flight1.addCrew(crew1);

flight2.addPassenger(passenger1);
flight1.addPassenger(passenger2);

flight1.addTrip(trip1)
flight1.addTrip(trip2)

flight1.assignGate(gate1);
flight2.assignGate(gate2);

trip1.addPassenger(passenger1);
trip1.addPassenger(passenger2);

trip1.addFlight(flight2);

plane1.addFlight(flight1);
plane1.addLayout(layout1)

layout1.addSeat(Seat1);

airline1.addEmployee(pilot1);
airline1.addEmployee(crew1);

//console.log test

// ------user story1 getallinformationPassenger--------
// console.log(passenger1);

// console.log(flight1);
// console.log(airport1);
// console.log(plane1);
// console.log(layout1);

// ------user story5 get salary------
// console.log(airline1.getTotalSalary());

// ------user story6 test gate---------
// const gateForFlight1 = airport1.getGateForFlight("1A");
// console.log(gateForFlight1);

// ----user story2 RetrunTicket test-----
// let returnPassengers = flight1.getPassengerReturnTicket();
// console.log(returnPassengers);

