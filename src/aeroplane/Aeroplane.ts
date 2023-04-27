import {Flight} from "../Flight";
export class Aeroplane{
    flights: Flight[] = [];
    constructor(private registerNumber:number, private code: string, private model:string){}
}
