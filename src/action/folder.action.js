import { baseURL } from "./config";
import axios from "axios";

export const createFolderAction = async (data) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.post(`${baseURL}/folder`, data, header);
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };

  export const getFolderAction = async () => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.get(`${baseURL}/folder`, header);
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };