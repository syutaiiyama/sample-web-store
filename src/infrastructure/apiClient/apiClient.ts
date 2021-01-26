import { firebaseClient } from "../firebase/firebaseClient";
import { apiClientGet } from "./apiClient.get";
import { apiClientPost } from "./apiClient.post";
import { apiClientPatch } from "./apiClient.patch";
import { apiClientDelete } from "./apiClient.delete";

export const apiClient = {
  auth: firebaseClient,
  get: apiClientGet,
  post: apiClientPost,
  patch: apiClientPatch,
  delete: apiClientDelete,
};
