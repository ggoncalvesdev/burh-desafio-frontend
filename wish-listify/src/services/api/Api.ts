import axios from "axios";

export const Api = axios.create({
  baseURL: "https://crudcrud.com/api/d10ada1930e54a50a48763f9cbf27549",
  headers: {
    "Content-Type": "application/json",
  },
});
