import { Flight } from "../Flight";
import { Employee } from "../human/Employee";


export class Airline{
    flights :Flight[]=[];
    employees :Employee[]=[];
    constructor(private name:string, private code:number){}

    addFlight(flight:Flight){
        this.flights.push(flight)
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getTotalSalary(): number {
        let totalSalary = 0;
        for (let i = 0; i < this.employees.length; i++) {
          totalSalary += this.employees[i].salary;
        }
        return totalSalary;
    }
}