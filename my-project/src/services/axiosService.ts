import axios, { AxiosInstance, AxiosResponse } from "axios";
export interface UserData {
  userId: string;
  email: string;
}
export interface UserAuthData {
  email: string;
  password: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// User authentication service
const authService = {
  register: async (userData: UserAuthData): Promise<AxiosResponse> => {
    return axiosInstance.post("register", userData);
  },
  login: async (userData: UserAuthData): Promise<AxiosResponse> => {
    return axiosInstance.post("login", userData);
  },
};

export { authService };
