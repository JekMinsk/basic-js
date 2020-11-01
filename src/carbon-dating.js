const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity){
    let final = parseFloat(sampleActivity);
    if(final + '' == 'NaN'  || typeof(sampleActivity) != 'string' || final <= 0 || final > MODERN_ACTIVITY)
        return false;
    if(typeof(final) != 'number')
        return false;
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / final) / k )
}
