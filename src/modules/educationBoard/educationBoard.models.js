import mongoose from 'mongoose'

const educationBoardSchemaData = mongoose.Schema({
    institute_type: {
        type: String
    },
    board_type: {
        type: Array
    },
    updated_at: {
        type: Date,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
})

const educationBoardtableData = mongoose.model('education_board', educationBoardSchemaData, 'education_board');

export default educationBoardtableData