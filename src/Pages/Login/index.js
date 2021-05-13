import { isEmpty } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { AUTH_ACTION } from "../../Redux/Action";
import { GetAuthSelector } from "../../Redux/Selector";
import { removeAuth } from "../../Utils/localStorage";
// import { removeAuth } from "../../Utils/localStorage";

const Login = (props) => {
  const dispatch = useDispatch();
  const auth = GetAuthSelector();
  const { isLoged, error } = auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoged) {
    return <Redirect to="/" />;
  }

  removeAuth();
  const onSubmit = (data) => {
    dispatch(AUTH_ACTION.LOGIN(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-login">
        {!isEmpty(error) && <span className="text-danger">{error}</span>}
        <div>
          <label className="label-login-form">Username</label>
          <input
            className="input-login-form"
            defaultValue="admin"
            {...register("username", { required: true })}
          />
        </div>
        {errors.username && (
          <span className="text-danger">This field is required</span>
        )}
        <div>
          <label className="label-login-form">Password</label>
          <input
            className="input-login-form"
            defaultValue="admin"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <span className="text-danger">This field is required</span>
        )}

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
