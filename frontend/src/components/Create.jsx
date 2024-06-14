import React, { useState } from "react";

const Create = ({ handleCreate }) => {
  const [formData, setFormData] = useState({
    column_name: "",
    row_number: "",
    cell_data: "",
  });
  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
        // console.log(formData);
      }}
      className="w-full items-center flex flex-col gap-3 text-ceter mt-3"
    >
      <input
        type="text"
        placeholder="Column Name"
        value={formData.column_name}
        className="p-2 bg-gray-200 rounded-lg w-1/3"
        onChange={(e) =>
          setFormData({ ...formData, column_name: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Row Number"
        value={formData.row_number}
        className="p-2 bg-gray-200 rounded-lg w-1/3"
        onChange={(e) =>
          setFormData({ ...formData, row_number: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Cell Data"
        value={formData.cell_data}
        className="p-2 bg-gray-200 rounded-lg w-1/3"
        onChange={(e) =>
          setFormData({ ...formData, cell_data: e.target.value })
        }
      />
      <button type="submit" className="mt-3 p-2 bg-green-300 rounded-lg w-1/3">
        Submit
      </button>
    </form>
  );
};

export default Create;
