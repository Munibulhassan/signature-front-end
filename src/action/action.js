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

    const response = await axios.post(`${baseURL}/auth/login`, payload, header);

    if (response?.data?.success == true) {
      localStorage.setItem("user", JSON.stringify(response.data?.data));
      localStorage.setItem("AccessToken", JSON.stringify(response.data?.token));
    }
    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const profileupdate = async (payload) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.patch(
      `${baseURL}/auth/updateprofile`,
      payload,
      header
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const passwordupdate = async (payload) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.patch(
      `${baseURL}/auth/password`,
      payload,
      header
    );

    return response.data;
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

    const response = await axios.post(
      `${baseURL}/auth/register`,
      payload,
      header
    );

    if (response.data.success == true) {
      localStorage.setItem("user", JSON.stringify(response.data?.data));
      localStorage.setItem("AccessToken", JSON.stringify(response.data?.token));
    }
    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const getteams = async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.get(`${baseURL}/team`, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const createteams = async (data) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.post(`${baseURL}/team`, data, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const updateteam = async (id, data) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.patch(`${baseURL}/team/${id}`, data, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const getkey = async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.get(`${baseURL}/getkey`, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const getUser = async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };

    const response = await axios.get(`${baseURL}/auth/users`, header);

    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const sendinvite = async (payload) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("AccessToken")),
      },
    };
    const response = await axios.post(
      `${baseURL}/auth/sendinvites`,
      payload,
      header
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};
