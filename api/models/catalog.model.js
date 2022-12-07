const mongoose = require('mongoose');
require('mongoose-type-email');

const catalogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  plans: [
    {
      name: String,
      hiring: String,
      quantity: Number
    }
  ],
  unsublink: {
    type: String,
  },
  instructions: {
    type: String,
  }
});

const catalogModel = mongoose.model('catalog', catalogSchema);
module.exports = catalogModel;