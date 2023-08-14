import { API_URL } from "../api/index";

export const filePath = (path: string) => {
  return `${API_URL}/${path}`;
}
