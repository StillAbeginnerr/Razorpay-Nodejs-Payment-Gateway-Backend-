// Imports
const express = require('express');
const router = express.Router();
const { CreateOrder } = require('../Controllers/subscriptionController');

// Routes for finalising payment
router.post('/create-order', CreateOrder);
router.post('/cancel-order', CancelOrder);
router.post('/verify-payment', VerifyPayment);

// Routes after payment is successful
router.post('/create-subscription', CreateSubscription);
router.post('/verify-subscription', VerifySubscription);

// Routes for subscription management
router.post('/cancel-subscription', CancelSubscription);
router.post('/upgrade-subscription', UpgradeSubscription);
router.post('/downgrade-subscription', DowngradeSubscription);

// Routes for monthly mandate management
router.post('/mandate', Mandate);
router.post('/verify-mandate', VerifyMandate);
router.post('/cancel-mandate', CancelMandate);

// Export the router
module.exports = router;