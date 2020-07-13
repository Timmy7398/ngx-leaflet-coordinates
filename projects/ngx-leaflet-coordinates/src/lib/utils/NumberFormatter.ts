
import { NumberFormatter, Util } from "leaflet";

NumberFormatter.round = function (num : number, dec : number, sep : string) : string {
    let res : string = Util.formatNum(num, dec) + "",
        numbers = res.split(".");

    if(numbers[1]){
        let d = dec - numbers[1].length;
        
        for(; d > 0; d--){
            numbers[1] += "0";
        }

        res = numbers.join(sep || ".");
    }

    return res;
}

NumberFormatter.toDMS = function(deg) : string{
    let d        : number = Math.floor(Math.abs(deg)), // Degree
        minfloat : number = (Math.abs(deg) - d) * 60,  // Minutes as float
        m        : number = Math.floor(minfloat),      // Real Minutes
        secfloat : number = (minfloat - m) * 60,       // Seconds as float
        s        : number = Math.round(secfloat);      // Real Seconds

    let sstring : string,
        mstring : string,
        dir     : string = (deg < 0) ? "-" : "";

    if(s == 60){
        m++;
        sstring = '00';
    } else if(s < 10){
        sstring = "0" + s;
    }

    if(m == 60) {
        d++;
        mstring = '00';
    }else if (m < 10){
        mstring = "0" + m;
    }

    return ("" + dir + d + "&deg; " + m + "' "+ s + '"');
}

NumberFormatter.createValidNumber = function(num : string, sep : string) : number {
    if(!num || num.length == 0){
        return undefined;
    }

    let numbers = num.split(sep || ".");
    let numRes : number; 

    try{
        if(isNaN((numRes = Number(numbers.join('.'))))){
            throw new Error("");
        }
    }catch(e){
        return undefined;
    }

    return numRes;
}