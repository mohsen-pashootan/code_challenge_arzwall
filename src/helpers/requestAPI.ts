import Axios, { AxiosResponse, AxiosError } from "axios";

export const requestAPI = (request: {
  url: string;
  method: string;
  timeout: number;
}) => {
  return new Promise<RESPONSE>(async (resolve, reject) => {
    try {
      const response: AxiosResponse = await Axios({
        ...request,
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200 || response.status === 201) {
        resolve(response.data);
      } else {
        reject("error occured");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        reject(error.message);
      }
      reject(error);
    }
  });
};
