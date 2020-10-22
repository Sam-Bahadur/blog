const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
        default: 'Admin'
    },
    description:{
        type: String,
        required: true,
    },
    ownerId:{
        type: String,
        required: true,
    }
},{
    timestamp:true
}
)

const Blog = mongoose.model('Blog', blogSchema)

module.exports = { Blog }