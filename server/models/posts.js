const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        deafult: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);