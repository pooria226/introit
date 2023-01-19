const moment = require("moment")
const emailValidator = require("email-validator")

let number     = /^([0-9]+)$/;
let credential = /^([0-1]+)$/;
let rate       = /^([15]+)$/;
let color      = /^([#0123456789ABCDEF]+)$/;
let char       = /^([ABCDEFGHIJKLMNOPQRSTUVWZ]+)$/;
let english    = /^([ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwxyz0123456789 ]+)$/;
let enName     = /^([A-Za-z0-9-_]+)$/;

exports.isEnglish = (input) => {
    return (english.test(input))
}

exports.isEnName = (input) => {
    return (enName.test(input))
}

exports.isNumber = (input) => {
    if (number.test(input)) {
        return true
    }
    return false
}

exports.isChar = (input) => {
    if (char.test(input)) {
        return true
    }
    return false
}

exports.isBoolean = (input) => {
    if (JSON.parse(input) !== true && JSON.parse(input) !== false) {
        return false
    }
    return true
}

exports.isOtp = (input) => {
    if (!number.test(input) || input.length !== process.env.SMS_OTP_LENGTH) {
        return true
    }
    return false
}

exports.isCredential = (input) => {
    if (!credential.test(input) || input.length !== 4) {
        return false
    }
    return true
}

exports.isRate = (input) => {
    if (parseInt(input) < 1 || parseInt(input) > 5){
        return false
    }
    return true
}

exports.isColor = (input) => {
    if (!color.test(input) || input.length !== 7 || input.substring(0,1) !== "#" || input.substring(1).includes("#")) {
        return false
    }
    return true
}

exports.isCoord = (lng, lat, alt) => {
    if (parseFloat(lng) < -180 || parseFloat(lng) > 180){
        return "lng"
    }
    if (parseFloat(lat) < -90 || parseFloat(lat) > 90){
        return "lat"
    }
    if (alt > 8848 || alt < -428){
        return "alt"
    }
    return true
}

exports.isMobile = (mobile) => {
    if (
            (typeof mobile === "undefined") || 
            (typeof mobile === "") || 
            (mobile.length !== 11) || 
            (mobile.substring(0, 2) !== "09") || 
            (!number.test(mobile))
        ){
        return false
    }else{
        return true
    }
}

exports.isPhone = (phone) => {
    if (
            (typeof phone === "undefined") || 
            (typeof phone === "") || 
            (phone.length < 11) || 
            // (phone.substring(0, 2) !== "09") || 
            (!number.test(phone))
        ){
        return false
    }else{
        return true
    }
}

exports.isEmail = (email) => {
    if(!(emailValidator.validate(email))){
        return false
    }else{
        return true
    }
}

exports.isUrl = (url) => {
    let UrlRegEx1 = /^(https:\/\/www\.|https:\/\/|http:\/\/www\.|http:\/\/|www\.)[a-zA-Z0-9-!_$]+\.[a-zA-Z]{2,5}/
    let UrlRegEx2 = /^[a-zA-Z0-9-!_$]+\.[a-zA-Z]{2,5}/
    if(!url.match(UrlRegEx1) && !url.match(UrlRegEx2)){
        return false   
    }else{
        return true
    }
}

exports.isAuthField = (authField) => {
    if(
        !this.isEmail(authField) 
        && 
        !this.isMobile(authField)){
        return false
    }else{
        return true
    }
}

exports.isFloat = (input) => {
    let decimal=  /^[-+]?[0-9]+\.[0-9]+$/; 
    if(decimal.test(input)) 
    { 
        return true;
    }
    return false;
}

exports.isLength = async(input, min, max) => {
    if(input.length < min){
        return false
    }
    if(input.length > max){
        return false
    }
    return true
}

exports.isDate = async(input) => {
    const itIsDate = moment(input, moment.ISO_8601, true).isValid()
    if(itIsDate){
        return true
    }
    return false
}

