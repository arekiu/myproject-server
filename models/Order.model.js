const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const orderSchema = new Schema(
    {
        order_id: {
            type: String,
            unique: true,
            },
        total: {
            type: Number
        },
        user_id: {
            type: Schema.Types.ObjectId, ref: "User"
        },
        order_items: [{
            type: Schema.Types.ObjectId, ref: "Service"
        }],
        date: { type: Date, required: true }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
    );

const Order = model("Order", orderSchema);

module.exports = Order;