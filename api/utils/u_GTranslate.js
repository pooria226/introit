const translate = require('translate-google')


exports.to = (text, lang) => {
    translate(text, {to: lang}).then(res => {
        return res
    }).catch(err => {
        console.error(err)
        return false
    })
}

