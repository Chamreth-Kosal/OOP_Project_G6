import { Flight } from "../Flight";
import { Passenger } from "../human/Passenger";
export class Trip{
    flight:Flight[]=[];
    passengers:Passenger[]=[];
    constructor(private direaction:string, private date:Date){}
}
