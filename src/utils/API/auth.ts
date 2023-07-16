import axios from "axios";
import { ILoginData, IRegisterData } from "../types";

const URL = "localhost:8080/auth";

export const register = async (credentials: IRegisterData) => {
  const respond = await axios.post(`${URL}/signup`, { ...credentials });
  return respond;
};

export const login = async (credentials: ILoginData) => {
  const respond = await axios.post(`${URL}/login`, { ...credentials });
  return respond;
};
