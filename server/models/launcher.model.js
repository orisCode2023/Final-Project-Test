import mongoose from "mongoose";

const launcherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true, 
    },
    id: {
        type: String,
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


const Launcher = mongoose.model("Launcher", launcherSchema);

export default Launcher