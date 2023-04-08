import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Tab from "./Tab";
import CreateTab from "./CreateTab";
import useLocalStorage from "./hooks/useLocalStorage";

const Index = () => {
  const [tabs, setTabs] = useLocalStorage("tabs", []);
  const [isNaming, setIsNaming] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar setTabs={setTabs} setIsNaming={setIsNaming} />
      <Container>
        {isNaming && <CreateTab setTabs={setTabs} setIsNaming={setIsNaming} />}
        {!isNaming && (
          <div className="flex flex-row flex-wrap w-full">
            {tabs.length ? (
              tabs.map((tab) => (
                <Tab data={tab} setSelected={setSelected} selected={selected} />
              ))
            ) : (
              <div className="text-2xl font-bold">add a tab to get started</div>
            )}
          </div>
        )}
        {tabs
          .filter((tab) => selected == tab.name)
          .map((tab) => (
            <div key={tab.name}>{tab.body}</div>
          ))}
      </Container>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
