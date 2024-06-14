import React, { useState } from "react";
import Cell from "./Cell";
import axios from "axios";

function Grid({ data, setData }) {
  const URL = "http://localhost:3000";
  const [editCell, setEditCell] = useState(null);
  const [cellData, setCellData] = useState("");

  const handleEdit = (id) => {
    setEditCell(id);
    // setCellData(currentData);
  };

  const handleSave = async (id, newData) => {
    await axios.put(`${URL}/api/spreadsheet/${id}`, { cell_data: newData });
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log(err));
    setEditCell(null);
    setCellData("");
    // Refresh data after save
    const response = await axios.get(`${URL}/api/spreadsheet`);
    setData(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/api/spreadsheet/${id}`);
    // Refresh data after deletion
    const response = await axios.get(`${URL}/api/spreadsheet`);
    setData(response.data);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <Cell
          key={item.id}
          data={item}
          isEditing={editCell === item.id}
          onEdit={handleEdit}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Grid;
