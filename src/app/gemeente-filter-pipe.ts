import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gemeenteFilter'
})

export class GemeenteFilterPipe implements PipeTransform {
    transform(wifipoints: any, term: any): any {
       if(term === undefined) return wifipoints; // return all wifipoints
       // returns the filtered array
       return wifipoints.filter(function(wifipoint:any){
       	return wifipoint.gemeente.toLowerCase().includes(term.toLowerCase()); // returns true/false
       })
    }
}