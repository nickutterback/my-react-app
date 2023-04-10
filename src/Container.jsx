import { Children, useState, useRef } from "react";
import Button from "./Button";
import Tab from "./Tab";
import CreateTab from "./CreateTab";
import { tab } from "@testing-library/user-event/dist/tab";
import TextMenu from "./TextMenu"

function Container({ children, selected, setSelected, isNaming, setIsNaming, tabs, setTabs  }) {
  const docRef = useRef();
  return (
    //Project Index: Left Hand Side
    <div className="max-w-7xl  w-full h-full mx-auto">
        {/*Top Tabs of Document*/}
        {isNaming && <CreateTab setTabs={setTabs} setIsNaming={setIsNaming} />}

        {!isNaming && (
          <div className="flex flex-row flex-wrap w-full">
            {tabs.length ? (
              tabs.map((tab) => (
                <Tab data={tab} setSelected={setSelected} selected={selected} setTabs={setTabs} docRef={docRef}/>
              ))
            ) : (
              <div className="text-2xl font-bold">add a tab to get started</div>
            )}
          </div>
        )}
        <TextMenu/>
        {/*Internal Document Content */}
        {tabs.filter((tab) => selected == tab.name).map((tab) => (
            <div className='w-3/4 h-3/4 border-black border-2'key={tab.name} ref={docRef} contentEditable={true} dangerouslySetInnerHTML={tab.body}>
            </div>
          ))}
    </div>
  );
}

export default Container;
