const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

// Load the JSON file directly
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, '../Docs/order.json'), 'utf8'));

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log('Swagger docs available at http://localhost:3000/api-docs');
};

module.exports = setupSwagger;