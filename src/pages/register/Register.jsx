import { useFormik } from "formik";
import React from "react";
import "../login/Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRelusFormik_register } from "../../ulti/axios/rules";

export default function Register() {
  const formik = useRelusFormik_register();

  return (
    <div className="register">
      <h2 className="register_Title">Đăng ký</h2>
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
          <div className="form-group login_input">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={formik.handleChange}
            />
            {formik.errors.name ? (
              <div className="text-danger mt-2">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group login_input">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              onChange={formik.handleChange}
            />
            {formik.errors.phoneNumber ? (
              <div className="text-danger mt-2">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <div className="formButtonLogin">
            <button type="submit" className="btn btn-primary">
              Đăng Ký
            </button>
          </div>
          <div className="text-center">
            <p>
              Bạn đã có tài khoản? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
