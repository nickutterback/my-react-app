import Button from "./Button";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import Tab from "./Tab";

const Sidebar = ({ tabs, setTabs, selected, docRef, setIsNaming, setSelected, indices }) => {

  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setIsNaming(true);
  };
  const handleIndicesClick = (doc) => {
    if(doc.tab == selected){
      console.log("Yes!")
      doc.anchor.scrollIntoView();
    }
  };

  return (
    <div className="left-0 h-full w-1/4 bg-gray-300 border-black border-2">
      <Button onClick={handleAddClick}>
        <div className="flex flex-row items-center text-white">
          <div className="h-5 w-5 mr-2">
            <PlusIcon />
          </div>
          <div> Add A Document</div>
        </div>
      </Button>

      {tabs.length ? (
              tabs.map((tab) => (
                <Tab data={tab} setSelected={setSelected} selected={selected} setTabs={setTabs} docRef={docRef}/>
              ))
            ) : (
              <div className="text-2xl font-bold">add a tab to get started</div>
      )}

      {indices.length && (
              indices.map((index) => (
                <Button onClick={() => handleIndicesClick(index)}>{index.tab}
                </Button>
              ))
            )}
    </div>
  );
};

export default Sidebar;
