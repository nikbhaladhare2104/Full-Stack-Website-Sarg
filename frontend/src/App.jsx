import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./components/Grid";
import Create from "./components/Create";

function App() {
  const URL = "http://localhost:3000";
  const [data, setData] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    axios
      //   .get(`${URL}/api/spreadsheet`)
      .get("http://localhost:3000/api/spreadsheet")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreate = async (data) => {
    const res = await axios.post(`${URL}/api/spreadsheet`, {
      ...data,
    });
    console.log(res.data);
    // Refresh data after save
    const response = await axios.get(`${URL}/api/spreadsheet`);
    setData(response.data);
    // setData([...data, response.data]);
  };
  return (
    <>
      <div className="container mx-auto">
        {" "}
        <Grid data={data} setData={setData} />{" "}
      </div>
      <div
        className="text-center bg-gray-200 p-2 w-1/3 mx-auto mt-3 rounded-lg"
        onClick={() => setIsCreating(true)}
      >
        Create
      </div>

      {isCreating && <Create handleCreate={handleCreate} />}
    </>
  );
}

export default App;
