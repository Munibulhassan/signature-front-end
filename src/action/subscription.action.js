import axios from "axios";
import { baseURL } from "./config";


export const getsubscriptiondata = async () => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.get(
        `${baseURL}/subscription`,
        header
      );
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };


  
  
export const subscribe = async (body) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.post(
        `${baseURL}/subscription/subscribe`,
        
        body,
        header

      );
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };


  