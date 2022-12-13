const mongoose = require("mongoose");
require("mongoose-type-email");

const notificationSchema = new mongoose.Schema({
  userid:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
},
  subscriptionid:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subscription',
    required: true
},
  date: {
    type: Date,
    require: true,
  },
  message: {
    type: String,
    maxlength: [300, "Max 300 characters"],
  },
});

const notificationModel = mongoose.model("notification", notificationSchema);
module.exports = notificationModel;
