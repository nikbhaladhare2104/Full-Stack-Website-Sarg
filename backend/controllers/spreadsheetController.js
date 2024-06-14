import { Spreadsheet } from "../models/spreadsheet.js";

const getAll = async (req, res) => {
  try {
    const data = await Spreadsheet.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { column_name, row_number, cell_data } = req.body;
    const newEntry = await Spreadsheet.create({
      column_name,
      row_number,
      cell_data,
    });
    res.json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { cell_data } = req.body;
    // console.log(id, cell_data);
    const updatedEntry = await Spreadsheet.update(
      { cell_data },
      { where: { id } }
    );
    res.json(updatedEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await Spreadsheet.destroy({ where: { id } });
    res.json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAll, create, update, remove };
