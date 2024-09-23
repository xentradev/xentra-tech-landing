import { IError, post } from "./httpService";

const defaultPath = "/auth";

interface ResponseAuth {
  type: "success" | "error";
  res: string | IError;
}

export const register = async (body: {
  email: string;
  password: string;
}): Promise<ResponseAuth> => {
  try {
    const result: any = await post<{ key: string }>(
      `${defaultPath}/register`,
      body,
      {
        timeout: 10000,
      }
    );
    return {
      type: "success",
      res: result,
    };
  } catch (e) {
    console.error(e);
    return {
      type: "error",
      res: e as IError,
    };
  }
};

export const login = async (body: {
  email: string;
  password: string;
}): Promise<ResponseAuth> => {
  try {
    const { key } = await post<{ key: string }>(`${defaultPath}/login`, body, {
      timeout: 10000,
    });
    return {
      type: "success",
      res: key,
    };
  } catch (e) {
    return {
      type: "error",
      res: e as IError,
    };
  }
};

export const confirmEmail = async (body: {
  key: string;
}): Promise<ResponseAuth> => {
  try {
    const { key } = await post<{ key: string }>(
      `${defaultPath}/account-email-verification-sent`,
      body,
      {
        timeout: 10000,
      }
    );
    return {
      type: "success",
      res: key,
    };
  } catch (e) {
    console.error(`ERROR - api ssr chat - confirmEmail - key=${body?.key}`, e);
    return {
      type: "error",
      res: e as IError,
    };
  }
};

export const changePassword = async (body: {
  request_type: string;
  email: string;
}): Promise<ResponseAuth> => {
  try {
    const { data } = await post<{ data: string }>(
      `${defaultPath}/password-recovery`,
      body,
      {
        timeout: 10000,
      }
    );
    return {
      type: "success",
      res: data,
    };
  } catch (e) {
    console.error(
      `ERROR - api ssr chat - changePassword - request_type=${body?.request_type} - email=${body?.email}`,
      e
    );
    return {
      type: "error",
      res: e as IError,
    };
  }
};

export const checkChangePasswordToken = async (body: {
  token: string;
  email: string;
}): Promise<ResponseAuth> => {
  try {
    const { data } = await post<{ data: string }>(
      `${defaultPath}/password-recovery/check-token`,
      body,
      {
        timeout: 10000,
      }
    );
    return {
      type: "success",
      res: data,
    };
  } catch (e) {
    console.error(
      `ERROR - api ssr chat - checkChangePasswordToken - token=${body?.token} - email=${body?.email}`,
      e
    );
    return {
      type: "error",
      res: e as IError,
    };
  }
};

export const resendChangePasswordEmail = async (body: {
  email: string;
}): Promise<ResponseAuth> => {
  try {
    const { data } = await post<{ data: string }>(
      `${defaultPath}/password-recovery/resend-email`,
      body,
      {
        timeout: 10000,
      }
    );
    return {
      type: "success",
      res: data,
    };
  } catch (e) {
    console.error(
      `ERROR - api ssr chat - resendChangePasswordEmail - email=${body?.email}`,
      e
    );
    return {
      type: "error",
      res: e as IError,
    };
  }
};

export const changePasswordConfirm = async (body: {
  email: string;
  token: string;
  password: string;
  password_confirm: string;
}): Promise<ResponseAuth> => {
  try {
    const { data } = await post<{ data: string }>(
      `${defaultPath}/password-recovery/confirm`,
      body,
      {
        timeout: 10000,
      }
    );
    return {
      type: "success",
      res: data,
    };
  } catch (e) {
    console.error(
      `ERROR - api ssr chat - changePasswordConfirm - email=${body?.email} - token=${body?.token} - password=${body?.password} - password_confirm=${body?.password_confirm}`,
      e
    );
    return {
      type: "error",
      res: e as IError,
    };
  }
};
