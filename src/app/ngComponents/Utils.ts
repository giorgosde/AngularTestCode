export class Utils{
    static compareValues(property:any, option:any) {
    return function (a:any, b:any) {
    if(option=="asc"){
     return (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
        } else
    if(option=="desc"){
     return (a[property].toLowerCase() > b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() < b[property].toLowerCase()) ? 1 : 0;
        } 
     }
}
}