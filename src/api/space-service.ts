import { SpaceModel } from "../types/types";
import { api } from "./api";

const context = 'space';

export const createSpace = async (space: SpaceModel) => {
  const response = await api.post(`/${context}/`, space);
    return response.data;
}