import { notification } from "ant-design-vue";
import axios, { AxiosError } from "axios";
import { ErrorResponse, isErrorResponse } from "../types/api";
import { userNotifications } from "../constants/constants";

export const api = axios.create({
  baseURL: 'http://localhost:8021', // замените на ваш URL
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ErrorResponse>) => {
    const errors = error?.response?.data?.errors;
    if (errors && isErrorResponse(errors)) {
      errors.forEach((item) => {
        notification.error({
          message: item.message,
          duration: 5,
        });
      })
      return Promise.reject(error);
    }
    
    notification.error({
      message: userNotifications.defaultErrorMessage,
      duration: 5,
    });

    return Promise.reject(error);
  }
);