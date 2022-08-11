import { baseURL } from "./config";
import axios from "axios";
// import { Toast } from "bootstrap";
export const userlogin = async (payload) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    const response = await axios.post(
      `${baseURL}/auth/login`,
      JSON.stringify(payload),
      header
    );
    
    if (!response.data.error) {
      localStorage.setItem("user", JSON.stringify(response.data?.data?.user));
      localStorage.setItem(
        "AccessToken",
        JSON.stringify(response.data?.data?.token)
      );
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return err.message;
  }
};

export const usersignup = async (payload) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(payload)
      const response = await axios.post(
        `${baseURL}/auth/register`,
        payload,
        header
      );
      
      if (response.data.success == true) {
        localStorage.setItem("user", JSON.stringify(response.data?.data));
        localStorage.setItem(
          "AccessToken",
          JSON.stringify(response.data?.token)
        );
        return response.data;
      } else {
        return response.data;

      }
    } catch (err) {
      return err.message;
    }
  };



