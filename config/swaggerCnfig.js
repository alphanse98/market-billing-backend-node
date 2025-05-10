// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
      description: "Simple API documentation",
    },
  },
  apis: ["./routes/*.js"], // adjust path if needed
};

const swaggerCnfig = swaggerJSDoc(swaggerOptions);

module.exports = swaggerCnfig;
