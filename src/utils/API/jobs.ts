import axios from "axios";
const URL = "http://localhost:8080";

export const getJobs = async () => {
  try {
    const res = await axios.get(`${URL}/jobs`);

    return res;
  } catch (error) {
    return error;
  }
};

export const addJob = async () => {};

export const removeJob = async () => {};

export const editJob = async () => {};
