const slugify = require('slugify')
const chars = /[*+~.()'"!:@`]/g

exports.slug = (input, replace) => {
    return slugify(input,{
        replacement: replace,
        remove: chars,
        lower: true,
        strict: false,
        locale: 'per',
        trim: true
    })
}



