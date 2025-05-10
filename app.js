const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const sequelize = require("./config/databaseConfig");
const swaggerCnfig = require("./config/swaggerCnfig");
const userRoutes = require("./routes/userRoutes");

const port = 4000;

app.use(express.json());

app.use("/api", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerCnfig));

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true });
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//  node app.js

