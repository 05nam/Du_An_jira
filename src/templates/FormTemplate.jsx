import React from "react";
import { Route } from "react-router-dom";
import "../css/style.css";

export default function FormTemplate(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <div className="row form_Container">
              <div className="d-none d-md-flex col-md-6 form_Left">
                <img src="./img/cyber.png" alt="" className="img_logo" />
              </div>
              <div className="col-12 col-md-6 form_Right">
                <props.component {...propsRoute.component} />
              </div>
            </div>
          </>
        );
      }}
    ></Route>
  );
}
