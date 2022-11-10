import { baseURL } from "./config";
import axios from "axios";

export const createSignatureAction = async (data, status) => {
  try {
    
    
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    if (status == 1) {
      const response = await axios.post(
        `${baseURL}/signdoc/me`,
        data,
        header
      );
      return response.data;
    } else if (status == 2) {
      const response = await axios.post(
        `${baseURL}/signdoc/team`,
        data,
        header
      );

      return response.data;
    } else if (status == 3) {
      const response = await axios.post(
        `${baseURL}/signdoc/bulk`,
        data,
        header
      );

      return response.data;
    }
  } catch (err) {
    return err.message;
  }
};

export const getSignatureAction = async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.get(`${baseURL}/signature`, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const fileupload = async (body) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.post(`${baseURL}/signature`, body, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const getsignaturedata = async (status, title) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.get(
      `${baseURL}/signature?status=${
        status == "ALL" ? "" : status
      }&title=${title}`,
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const updatesignature = async (id, data) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.patch(
      `${baseURL}/signdoc/${id}`,
      data,
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
};


export const deletesignature = async (id)=>{
  try {
    const header = {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.delete(
      `${baseURL}/signdoc/${id}`,
      
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
}
