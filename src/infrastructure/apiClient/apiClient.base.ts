import { ApiError } from "../../contexts/error/error";

const url = process.env.API_URL;

const base = async <T>(
  path: string,
  method: string,
  body?: string,
  idToken?: string
): Promise<T> => {
  try {
    const headers = idToken
      ? { "Content-Type": "application/json", "x-auth-key": idToken }
      : { "Content-Type": "application/json" };
    const response = await fetch(url + path, { method, headers, body });
    if (response.ok) return (await response.json()) as T;
    throw new Error((await response.json()).message);
  } catch (e) {
    throw new ApiError(e.message);
  }
};

export const apiClientBase = {
  get: async <T>(path: string, idToken?: string): Promise<T> =>
    await base(path, "GET", undefined, idToken),
  post: async <T>(path: string, body: string, idToken?: string): Promise<T> =>
    await base(path, "POST", body, idToken),
  patch: async <T>(path: string, body: string, idToken?: string): Promise<T> =>
    await base(path, "PATCH", body, idToken),
  delete: async <T>(path: string, idToken?: string): Promise<T> =>
    await base(path, "DELETE", undefined, idToken),
};
