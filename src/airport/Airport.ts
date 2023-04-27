import {Flight} from "../Flight";
import {Gate} from "./Gate";
export class Airport{
    flights : Flight[]= [];
    gates : Gate[]=[];
    constructor(private name:string, private code:string, private address:string){}
}
