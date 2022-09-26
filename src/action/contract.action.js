import { baseURL } from "./config";
import axios from "axios";

export const getcontractdata = async (status, title) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.get(
        `${baseURL}/document?status=${
          status == "ALL" ? "" : status
        }&title=${title}`,
        header
      );
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };
  export const updatecontract = async (id,body) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
        },
      };
  
      const response = await axios.patch(
        `${baseURL}/document/${id}`,body,
        header
      );
  
      return response.data;
    } catch (err) {
      return err.message;
    }
  };
  
export const deletedocument = async (id)=>{
  try {
    const header = {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.delete(
      `${baseURL}/document/${id}`,
      
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
}