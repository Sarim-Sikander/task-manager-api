const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
})

const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks

// const me = new Tasks({ 
//     description: 'Study about presentation 3     ',
//     // completed: true
//  })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('error!',error)
// })