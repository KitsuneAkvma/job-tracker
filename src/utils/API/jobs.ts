import axios, { AxiosResponse } from "axios";
import { IJobData, INewJobData } from "../types";
const URL = "http://localhost:8080/jobs";

export const getAllJobs = async (nickname: string): Promise<IJobData[]> => {
  try {
    const res: AxiosResponse = await axios.get(`${URL}/${nickname}`);

    return res.data.data;
  } catch (error: any) {
    console.error((error as Error).message);
    console.error({ nickname });
    return error;
  }
};

export const getJob = async (id: number) => {
  try {
    const res: AxiosResponse = await axios.get(`${URL}/job/${id}`);

    return res.data.data;
  } catch (error) {
    console.error((error as Error).message);
    return error;
  }
};
export const addJob = async (jobData: INewJobData) => {
  try {
    const res: AxiosResponse = await axios.post(`${URL}`, jobData);

    return res.data.data;
  } catch (error) {
    console.error((error as Error).message);
    return error;
  }
};

export const removeJob = async () => {};

export const editJob = async () => {};
