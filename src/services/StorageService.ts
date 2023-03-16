import { IField } from "../interfaces";

const KEY = "data";

class StorageService {
  getItem() {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  }

  setItem(payload: IField[]) {
    localStorage.setItem(KEY, JSON.stringify(payload));
  }
}

const service = new StorageService();

export default service;
