export const AUTH_TYPE = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

export const AUTH_ACTION = {
  LOGIN: (params) => {
    return {
      type: AUTH_TYPE.LOGIN,
      data: params,
    };
  },
  LOGIN_SUCCESS: (data) => {
    return {
      type: AUTH_TYPE.LOGIN_SUCCESS,
      data: data,
    };
  },
  LOGIN_FAIL: (err) => {
    return {
      type: AUTH_TYPE.LOGIN_FAIL,
      data: err,
    };
  },
};
