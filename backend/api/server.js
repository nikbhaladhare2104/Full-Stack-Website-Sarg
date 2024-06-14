import express, { json } from "express";
import { sequelize } from "../config/database.js";
import spreadsheetRoutes from "../routes/spreadsheetRoutes.js";
import { config } from "dotenv";
import cors from "cors";
// Load environment variables from .env file
config();

const app = express();
app.use(json());
app.use(cors());

app.use("/api/spreadsheet", spreadsheetRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
});

export default app;
// module.exports = app;
