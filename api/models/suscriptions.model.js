const mongoose = require("mongoose");
require("mongoose-type-email");

const suscriptionSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
},
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  plans: [
    {
      name: {
        type: String,
        require: true,
      },
      hiring: {
        type: String,
        require: true,
      },
      quantity: {
        type: Number,
        require: true,
      },
    },
  ],
  unsublink: {
    type: String,
    require: true,
  },
  instructions: {
    type: String,
    require: true,
  },
  hiring_day: {
    type: Date,
    require: true,
  },
  paiment_method: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
    maxLength: [200, "Max 200 caracte"],
    require: true,
  },
});

const suscriptionModel = mongoose.model("suscription", suscriptionSchema);
module.exports = suscriptionModel;
