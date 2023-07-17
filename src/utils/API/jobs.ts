import axios, { AxiosResponse } from "axios";
import { IJobData } from "../types";
const URL = "http://localhost:8080/jobs";

export const getAllJobs = async (): Promise<IJobData[]> => {
  try {
    const res: AxiosResponse = await axios.get(`${URL}`);

    return res.data.data;
  } catch (error: any) {
    console.log({error})
    return error;
  }
};

export const getJob = async () => {};
export const addJob = async () => {};

export const removeJob = async () => {};

export const editJob = async () => {};
