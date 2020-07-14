import * as L from 'leaflet';

export namespace NumberFormatter {
    export function createValidNumber(num : string, sep : string ) : number {
        if(!num || num.length == 0)
            return undefined;
        
        let numbers = num.split(sep || ".");
        let numRes  ; 
        
        try {
            if (isNaN((numRes = Number(numbers.join(".")))))
                throw new Error();
        } catch (e) {
            return undefined;
        }
    
        return numRes;
    }
    
    export function round(num : number, dec : number, sep : string) : string {
        let res      = L.Util.formatNum(num, dec) + "",
            numbers  = res.split(".");
            
        if (numbers[1]) {
            let d  = dec - numbers[1].length;
            for (; d > 0; d--) {
                numbers[1] += "0";
            }
            res = numbers.join(sep || ".");
        }
    
        return res;
    }
    
    export function toDMS(deg : number) : string {
        let d         = Math.floor(Math.abs(deg)), // Degree
            minfloat  = (Math.abs(deg) - d) * 60,  // Minute as float
            m         = Math.floor(minfloat),      // Real Minutes
            secfloat  = (minfloat - m) * 60,       // Seconds as float
            s         = Math.round(secfloat);      // Real Seconds
    
        let sstring ,
            mstring ,
            dir      = (deg < 0) ? "-" : "";
    
        if (s == 60) {
            m++;
            sstring = "00";
        } else if (s < 10) {
            sstring = "0" + s;
        }
    
        if (m == 60) {
            d++;
            mstring = "00";
        } else if (m < 10) {
            mstring = "0" + m;
        }
    
        return ("" + dir + d + "&deg; " + mstring + "' " + sstring + "''");
    }
}
