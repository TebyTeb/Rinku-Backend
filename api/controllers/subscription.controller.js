const Subscription = require("../models/subscriptions.model");
const Notification = require("../models/notification.model");

function getSubscriptions(req, res) {
  Subscription
    .find({ userid: res.locals.user._id })
    .then(subs => {

      let result = []

      subs.map(sub => {
        let today = new Date()
        let nextPayment = new Date(sub.hiring_day)

        if(sub.plan.hiring === 'year') {  
          let totalYears = 0;
          while(nextPayment < today) {
            totalYears += 1;
            nextPayment.setFullYear(nextPayment.getFullYear() + 1);
          }
          result.push({...sub._doc, "nextPayment": nextPayment, "totalPaid": totalYears*sub.plan.quantity})
        }

        if (sub.plan.hiring === 'month') {
          let totalMonths = 0;
          while (nextPayment < today) {
            if(nextPayment.getMonth() === 11) {
              totalMonths += 1;
              nextPayment.setFullYear(nextPayment.getFullYear() + 1);
              nextPayment.setMonth(0);
            }
            else if(nextPayment.getMonth() !== 11) {
              totalMonths += 1;
              nextPayment.setMonth(nextPayment.getMonth() + 1);
            }
          }

          result.push({...sub._doc, "nextPayment": nextPayment, "totalPaid": totalMonths*sub.plan.quantity})
        }
      })
      res.json(result)
    })
    .catch((err) => res.json(err));  
    }

function createSubscriptions(req, res) {
  Subscription
    .create({userid: res.locals.user._id, ...req.body})
    .then((subs) => res.json(subs))
    .catch((err) => res.json(err));
}

function updateSubscriptions(req, res) {
  Subscription
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((subs) => res.json(subs))
    .catch((err) => res.json(err));
}

function deleteSubscriptions(req, res) {
  Notification
    .deleteMany({ subscriptionid: req.params.id })
    .then(notif => {
      Subscription
        .findOneAndDelete({ _id: req.params.id })
        .then(subs => res.json(subs))
        .catch((err) => res.json(err));
    })
}

module.exports = {
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
};
