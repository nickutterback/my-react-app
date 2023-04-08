import { Children, useState } from "react";
import Button from "./Button";

function Container({ children }) {
  return (
    //Project Index: Left Hand Side
    <div className="max-w-7xl  w-full h-full mx-auto">{children}</div>
  );
}

export default Container;
