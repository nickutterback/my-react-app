import Button from "./Button";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
const Sidebar = ({ setTabs, setIsNaming }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsNaming(true);
    // setTabs((state) => [...state, { name: "danes tab" }]);
  };

  return (
    <div className="left-0 h-full w-64 bg-gray-300">
      <Button onClick={handleClick}>
        <div className="flex flex-row items-center text-white">
          <div className="h-5 w-5 mr-2">
            <PlusIcon />
          </div>
          <div> Add A Document</div>
        </div>
      </Button>
    </div>
  );
};

export default Sidebar;
