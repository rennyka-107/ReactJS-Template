export const TODO_TYPE = {
  GET_TO_DO: "GET_TO_DO",
  GET_TO_DO_SUCCESS: "GET_TO_DO_SUCCESS",
  GET_TO_DO_FAIL: "GET_TO_DO_FAIL",
};

export const TODO_ACTION = {
  GET_TO_DO: () => {
    return {
      type: TODO_TYPE.GET_TO_DO,
    };
  },
  GET_TO_DO_SUCCESS: (data) => {
    return {
      type: TODO_TYPE.GET_TO_DO_SUCCESS,
      data: data,
    };
  },
  GET_TO_DO_FAIL: (err) => {
    return {
      type: TODO_TYPE.GET_TO_DO_FAIL,
      data: err,
    };
  },
};
