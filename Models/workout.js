const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    exercises: [
        {type: {
            type: String,
            trim: true,
            required: "Enter excersie type"
        },
        weight:{
            type: Number,
        },
        sets:{
            type: Number,
        },
        reps:{
            type: Number,
        },
        duration: {
            type: Number,
            required: "Enter an amount of time"
        },
        distance: {
            type: Number,
        }
    }
    ],
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;