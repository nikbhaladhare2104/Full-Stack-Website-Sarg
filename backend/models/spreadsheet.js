import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Spreadsheet = sequelize.define(
  "Spreadsheet",
  {
    column_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    row_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cell_data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

// export default { Spreadsheet };
