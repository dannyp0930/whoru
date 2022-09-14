import axios from "axios";

export default function createInstance() {
  const instance = axios.create();
  return instance;
}