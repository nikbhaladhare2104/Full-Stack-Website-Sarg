import axios from "axios";

const API_URL = "/api/spreadsheet";

export const getSpreadsheetData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createSpreadsheetData = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateSpreadsheetData = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteSpreadsheetData = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
