const moment = require('moment')
const isNumber = /^\d+$/;

exports.base = () => {
    let newDate = new Date()
    let base    = newDate.getTime(1970-01-01)
    return base
}

exports.now = () => {
    let newDate = new Date()
    let now     = newDate.getTime()
    return now
}

exports.age = (date) => {
    let newDate = new Date()
    let now     = newDate.getTime()
    let age     = Math.abs(now - date.getTime())
    return age
}

exports.days = (date) => {
    let newDate = new Date()
    let now     = newDate.getTime()
    let days = (Math.abs(now - date.getTime())/ (24 * 60 * 60 * 1000)).toFixed(1)
    return days
}

exports.isDate = (input) => {
    let input2 = parseInt(input)
    let date = new Date()
    let now = date.getTime()
    if(!moment(input2).isValid()){
        return false
    }
    if(!isNumber.test(input2) || input2 < 0 || input2 > now){
        return false
    }
    return true
}



// var today           = new Date();
// let todayDate       = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// let todayTime       = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let todayDateTime   = date+' '+time;