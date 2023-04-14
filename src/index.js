import React, { useState, useRef} from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Tab from "./Tab";
import CreateTab from "./CreateTab";
import useLocalStorage from "./hooks/useLocalStorage";
import TextMenu from "./TextMenu";
import QuickLinks from "./QuickLinks";
import NavBar from "./NavBar"
import Anchor from './Anchor'

const Index = () => {
  const [tabs, setTabs] = useLocalStorage("tabs", []);
  const [isNaming, setIsNaming] = useState(false);
  const [selected, setSelected] = useState(null);
  const [indices, setIndices] = useLocalStorage("indices", []);
  const docRef = useRef();
  const anchorArray = [];

  return (
    <div className="h-screen w-screen">
      <div className = 'w-screen'>
        <NavBar/>
      </div>
      <div className="h-4/6 w-screen flex flex-row">
        <Sidebar isNaming = {isNaming} setIsNaming={setIsNaming} tabs={tabs} setTabs={setTabs} selected={selected} setSelected={setSelected} docRef={docRef} indices={indices} anchorArray={anchorArray}/>
        <Container isNaming = {isNaming} setIsNaming={setIsNaming} tabs={tabs} setTabs={setTabs} selected={selected} setSelected={setSelected} docRef={docRef} setIndices={setIndices} indices={indices}/>
      </div>
      <div className="h-1/6 w-screen flex border border-black border-2">
        <QuickLinks/>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
