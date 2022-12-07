const moongose = require("moongose");
require("mongoose-type-email");

const notificationSchema = new mongoose.Schema({
  userid:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
},
  suscriptionid:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'suscription',
    required: true
},
  date: {
    type: Date,
    require: true,
  },
  message: {
    type: String,
    maxlength: [300, "Max 300 caracteres"],
  },
});

const notificationModel = mongoose.model("notification", notificationSchema);
module.exports = notificationModel;
