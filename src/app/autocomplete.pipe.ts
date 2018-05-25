
import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name:'autocomplete'
})
export class autocompletePiPe implements PipeTransform{
transform(value:any ,filterString:any,filtredproperty:any,limit):any{
    if(value.length>30){
        return value.slice(0,30);
    }else{
if(value.length===0){
    return value;
}else{
    if(filterString.length<limit){
        return [];
    }else{
    const resultArray=[];
    for(const item of value){
        if(item[filtredproperty].toLowerCase().indexOf(filterString.toLowerCase()) > -1){
            resultArray.push(item);
        }
    }
    return resultArray;
}}
}
}}