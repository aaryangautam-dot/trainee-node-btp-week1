const express = require("express");

const employeeRoutes = require("./routes/employeeRoutes");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/employees", employeeRoutes);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});