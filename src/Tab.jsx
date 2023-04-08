import { useState } from "react";
import Button from "./Button";

function Tab({ data, setSelected, selected }) {
  const isSelected = selected == data.name;
  return (
    //Project Index: Left Hand Side
    <div
      className={`h-12 w-40 ${isSelected ? "bg-blue-500" : "bg-green-100"}`}
      onClick={() => setSelected(data.name)}
    >
      {data.name}
    </div>
  );
}

export default Tab;
