import { baseURL } from "./config";
import axios from "axios";

export const createSignatureAction = async (data, status) => {
  try {
    // console.log(status)
    console.log(data);
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    if (status == 1) {
      const response = await axios.post(
        `${baseURL}/signature/me`,
        data,
        header
      );
      return response.data;
    } else if (status == 2) {
      const response = await axios.post(
        `${baseURL}/signature/team`,
        data,
        header
      );

      return response.data;
    } else if (status == 3) {
      const response = await axios.post(
        `${baseURL}/signature/bulk`,
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
      `${baseURL}/signature?status=${status=="ALL"?"":status}&title=${title}`,
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
};

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
      `${baseURL}/document?status=${status=="ALL"?"":status}&title=${title}`,
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
};
