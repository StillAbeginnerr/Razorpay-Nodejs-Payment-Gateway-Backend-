const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./database/connection');
const SubscriptionRoutes = require('./Routes/subscriptionRoute.js')
const setupSwagger = require('./Config/swaggerConfig');

app.use(express.json());
app.use(cors());
app.use('/api',SubscriptionRoutes);
setupSwagger(app);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
