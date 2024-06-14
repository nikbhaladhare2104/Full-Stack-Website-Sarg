import { Sequelize } from "sequelize";
import { Spreadsheet } from "../models/spreadsheet.js";

const seedDatabase = async () => {
  try {
    await Spreadsheet.bulkCreate([
      { column_name: "A", row_number: 1, cell_data: "Sample Data 1" },
      { column_name: "B", row_number: 1, cell_data: "Sample Data 2" },
      { column_name: "C", row_number: 1, cell_data: "Sample Data 3" },
      { column_name: "A", row_number: 2, cell_data: "Sample Data 4" },
      { column_name: "B", row_number: 2, cell_data: "Sample Data 5" },
      { column_name: "C", row_number: 2, cell_data: "Sample Data 6" },
    ]);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
