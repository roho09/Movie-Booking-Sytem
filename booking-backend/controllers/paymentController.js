const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  try {
    const { amount, token } = req.body;
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'Movie Booking Payment',
    });
    res.json(charge);
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment' });
  }
};
