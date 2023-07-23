import axios, { AxiosResponse } from "axios";
import { IJobData } from "../types";
import { useAuth0 } from "@auth0/auth0-vue";
const URL = "http://localhost:8080/jobs";

export const getAllJobs = async (nickname: string): Promise<IJobData[]> => {
  try {
    const res: AxiosResponse = await axios.get(`${URL}/:${nickname}`);

    return res.data.data;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};

export const getJob = async () => {};
export const addJob = async () => {};

export const removeJob = async () => {};

export const editJob = async () => {};
