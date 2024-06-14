import React, { useState } from "react";

function Cell({ data, isEditing, onEdit, onSave, onDelete }) {
  const [cellData, setCellData] = useState(data.cell_data);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setCellData(e.target.value);
  };

  return (
    <div className="p-4 border flex flex-col">
      {isEditing ? (
        <input
          type="text"
          value={cellData}
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => e.key === "Enter" && onSave(data.id, cellData)}
          // onBlur={() => onSave(data.id)}
        />
      ) : (
        <span
          className="text-center mb-1"
          onDoubleClick={() => onEdit(data.id)}
        >
          {data.cell_data}
        </span>
      )}
      <div className="flex  justify-center">
        <button
          className="ml-2 bg-gray-300 rounded-md p-2 "
          onClick={() => onDelete(data.id)}
        >
          Delete
        </button>
        {/* <button className="ml-2 bg-gray-300 rounded-md p-2"
          onClick={() => onSave(data.id, cellData)}
        
        >Create</button> */}
      </div>
    </div>
  );
}

export default Cell;
