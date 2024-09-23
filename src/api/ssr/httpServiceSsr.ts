import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    "Content-type": "application/json",
  },
  timeout: 30000,
});

export const setupAxiosInterceptors = (logout: () => void) => {
  http.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        // Call the logout function from the context
        logout();
        return Promise.reject(new Error("401"));
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // Call the logout function from the context
        logout();
      }
      return Promise.reject(error);
    }
  );
};
export interface IError {
  error: boolean;
  msg: string;
  status_code: number;
}

const defaultError: IError = {
  error: true,
  status_code: 500,
  msg: "error.internal",
};

export async function post<T = any>(
  url: string,
  body: any,
  token: string | null,
  extraAxiosRequestConfig?: AxiosRequestConfig
): Promise<T> {
  let errorResponseCatch: IError;
  try {
    const { data, status }: AxiosResponse = await http.post<T>(url, body, {
      // @ts-ignore
      validateStatus: false,
      headers: {
        ...(token && { Authorization: `Bearer ${token.replaceAll('"', "")}` }),
      },
      ...extraAxiosRequestConfig,
    });

    if (status === 400) {
      const msgError: IError = {
        error: true,
        status_code: 400,
        msg: data.error,
      };
      errorResponseCatch = msgError;
      throw msgError;
    }

    if (status > 399) {
      errorResponseCatch = defaultError;
      throw defaultError;
    }
    return data;
  } catch (error) {
    console.error("POST ERROR: ", error, "- URL: ", url);
    throw errorResponseCatch!;
  }
}

export async function remove<T = any>(url: string, params?: any): Promise<T> {
  try {
    const { data, status }: AxiosResponse = await http.delete<T>(url, {
      params,
      // @ts-ignore
      validateStatus: false,
    });
    if (status > 399) {
      throw defaultError;
    }
    return data;
  } catch (error) {
    throw defaultError;
  }
}

export async function get<T>(
  url: string,
  params?: any,
  token?: string,
  extraAxiosRequestConfig?: AxiosRequestConfig
): Promise<T> {
  try {
    const { data, status }: AxiosResponse = await http.get<T>(url, {
      params,
      // @ts-ignore
      validateStatus: false,
      ...(token
        ? {
            headers: {
              Authorization: `Bearer ${token.replaceAll('"', "")}`,
            },
            ...extraAxiosRequestConfig,
          }
        : {}),
    });

    if (status > 399) {
      let msgError: IError = defaultError;
      console.error("HTTP SERVICE GET", {
        status,
        data,
        url,
      });
      if (data) {
        msgError = {
          error: true,
          status_code: status,
          msg: data,
        };
      }
      throw msgError;
    }
    return data;
  } catch (error) {
    console.error("GET ERROR SSR: ", error, "- URL: ", url);
    throw error;
  }
}

export async function put<T = any>(url: string, body: any): Promise<T> {
  try {
    const { data, status }: AxiosResponse = await http.put<T>(url, body, {
      // @ts-ignore
      validateStatus: false,
    });
    if (status > 399) {
      throw defaultError;
    }
    return data;
  } catch (error) {
    throw defaultError;
  }
}

/*export function remove<T>(url: string): Promise<T | IError> {
  const removeRequest: any = () =>
    http.delete(url, {
      // @ts-ignore
      validateStatus: false,
    });
  return handleGenericRequest(removeRequest);
}

export function update<T>(url: string, body: any): Promise<T | IError> {
  const removeRequest: any = () =>
    http.put(url, body, {
      // @ts-ignore
      validateStatus: false,
    });
  return handleGenericRequest(removeRequest);
}
*/
/*export const setHttpAxiosToken = (token: string) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHttpAxiosToken = () => {
  delete http.defaults.headers.common.Authorization;
};*/
