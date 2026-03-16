import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['jone', 'doe'],
        require: true, 
    },
    rocketType: {
        type: String,
        enum: ['Shahab3', 'Fetah110', 'Radwan', 'Kheibar'],
        require: true, 
    },
    latitude: {
        type: Number,
        require: true, 
    },
    longitude: {
        type: Number,
        require: true, 
    },
    city: {
        type: String,
        require: true, 
    },
}, {timestamps: true});


const Schema = mongoose.model("Schema", schema);

export default Schema