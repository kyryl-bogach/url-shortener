const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Link = new Schema(
    {
        key: { type: String, required: true },
        value: { type: String, required: true },
    },
    { timestamps: true },
)

Link.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['_id']
        delete ret['__v']
        delete ret['createdAt']
        delete ret['updatedAt']
        return ret
    }
})

module.exports = mongoose.model('links', Link)
