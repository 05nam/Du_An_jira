import React from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRelusFormik_login } from "../../ulti/axios/rules";

export default function Login() {
  let dispatch = useDispatch();
  const formik = useRelusFormik_login(dispatch);

  return (
    <div className="login">
      <div className="register">
        <h2 className="register_Title">Đăng nhập</h2>
        <div className="register_Container p-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group login_input">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-danger mt-2">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group login_input">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="passWord"
                onChange={formik.handleChange}
              />
              {formik.errors.passWord ? (
                <div className="text-danger mt-2">{formik.errors.passWord}</div>
              ) : null}
            </div>
            <div className="formButtonLogin">
              <button type="submit" className="btn btn-primary  ">
                Đăng Nhập
              </button>
            </div>

            <div className="text-center">
              <p>
                Bạn chưa có tài khoản? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
