import { useState } from "react";
import Button from "./Button";

function Tab({ data, setSelected, selected, setTabs, docRef }) {

  function handleClick() {
      setTabs((state) => {
        let tabs = [...state];
        console.log(tabs);
        tabs = tabs.map((tab) => {
          if(tab.name == selected){
            return { name: tab.name, body: {__html: docRef.current.innerHTML }}
          }
          else{
            return tab;
          }
        });
        return [...tabs];
        }
      );
      setSelected(data.name);
  }

  const isSelected = selected == data.name;
  return (
    //Project Index: Left Hand Side
    <div
      className={`h-12 w-40 ${isSelected ? "bg-blue-500" : "bg-green-100"}`}
      onClick={() => handleClick()}
    >
      {data.name}
    </div>
  );
}

export default Tab;
