import { Sequelize } from "sequelize";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// export default { sequelize };
