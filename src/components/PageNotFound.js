import React from "react";

export default function PageNotFound() {
  return (
    <div className="container my-3">
      <h1 className="text-center">Error 404!</h1>
      <div className="row">
        <div className="col-md-12">
          <label>
            404! Page Not found - <a href="/">Go to Home page</a>
          </label>
        </div>
      </div>
    </div>
  );
}
