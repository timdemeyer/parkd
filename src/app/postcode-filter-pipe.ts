import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'postcodeFilter'
})

export class PostcodeFilterPipe implements PipeTransform {
    transform(wifipoints: any, term: number): any {
       if(term === undefined) return wifipoints; // return all wifipoints
       // returns the filtered array
       return wifipoints.filter(function(wifipoint:any){
       	return wifipoint.postcode.includes(term); // returns true/false
       })
    }
}