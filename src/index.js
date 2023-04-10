import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Tab from "./Tab";
import CreateTab from "./CreateTab";
import useLocalStorage from "./hooks/useLocalStorage";
import TextMenu from "./TextMenu";
import QuickLinks from "./QuickLinks";

const Index = () => {
  const [tabs, setTabs] = useLocalStorage("tabs", []);
  const [isNaming, setIsNaming] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar isNaming = {isNaming} setIsNaming={setIsNaming} tabs={tabs} setTabs={setTabs} selected={selected} setSelected={setSelected} />
      <Container isNaming = {isNaming} setIsNaming={setIsNaming} tabs={tabs} setTabs={setTabs} selected={selected} setSelected={setSelected} />
      <QuickLinks/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
