import { baseURL } from "./config";
import axios from "axios";

export const createSignatureAction = async (data) => {
    try {
      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
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

  export const getSignatureAction = async () => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.get(`${baseURL}/document`, header);
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };