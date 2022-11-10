import axios from "axios";
import { baseURL } from "./config";

export const fileupload = async (body) => {
  try {
    const header = {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.post(`${baseURL}/document/file`, body, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const createdocument = async (data) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };
    
    const response = await axios.post(`${baseURL}/document`, data, header);
    return response.data;
  } catch (err) {
    return err.message;
  }
};


export const updatedocument = async (id,data) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };
    const response = await axios.patch(
      `${baseURL}/document/${id}`,
      data,
      header
    );

    return response.data;
    
    
  } catch (err) {
    return err.message;
  }
};
