const { Schema, model } = require("mongoose");


const serviceSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.'],
            unique: true,
            trim: true
            },
        price: {
            type: Number,
            required: [true, "Price is required."],
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
    );

const Service = model("Service", serviceSchema);

module.exports = Service;


