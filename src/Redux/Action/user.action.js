export const USER_TYPE = {
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_FAIL: "GET_ALL_USERS_FAIL",
};

export const USER_ACTION = {
  GET_ALL_USERS: () => {
    return {
      type: USER_TYPE.GET_ALL_USERS,
    };
  },
  GET_ALL_USERS_SUCCESS: (data) => {
    return {
      type: USER_TYPE.GET_ALL_USERS_SUCCESS,
      data: data,
    };
  },
  GET_ALL_USERS_FAIL: (err) => {
    return {
      type: USER_TYPE.GET_ALL_USERS_FAIL,
      data: err,
    };
  },
};
