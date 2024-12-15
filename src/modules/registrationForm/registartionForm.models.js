import mongoose from 'mongoose'

const registartionFormSchemaData = mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    institute_type: {
        type: String
    },
    selection_types: [{
    
    }],
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

const registartionFormtableData = mongoose.model('registartion_form', registartionFormSchemaData, 'registartion_form');

export default registartionFormtableData