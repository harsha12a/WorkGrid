const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assignedTo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    status: {
        type: String,
        enum: ['pending', 'inProgress', 'completed'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    dueDate: {
        type: Date,
        required: true
    },
    files: [
        {
            filename: String,
            contentType: String,
            data: Buffer
        }
    ]
})

module.exports = mongoose.model('Task', taskSchema)