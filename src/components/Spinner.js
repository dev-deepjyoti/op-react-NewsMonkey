import React from "react";
import loading from "../assets/img/loading.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img
        className="my-3"
        src={loading}
        alt="loading"
        width={50}
        height={50}
      />
    </div>
  );
}
