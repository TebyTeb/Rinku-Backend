const mongoose = require("mongoose");
require("mongoose-type-email");

const subscriptionSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
},
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  plan: {
      name: {
        type: String,
        require: true,
      },
      hiring: {
        type: String,
        require: true,
        enum: ['year', 'month'],
      },
      quantity: {
        type: Number,
        require: true,
      },
    },
  unsublink: {
    type: String,
    require: false,
  },
  instructions: {
    type: String,
    require: false,
  },
  hiring_day: {
    type: Date,
    require: true,
  },
  payment_method: {
    type: String,
    require: false,
  },
  notes: {
    type: String,
    maxLength: [200, "Max 200 characters"]
  },
  iconName: {
    type: String
  }
});

const subscriptionModel = mongoose.model("subscription", subscriptionSchema);
module.exports = subscriptionModel;
