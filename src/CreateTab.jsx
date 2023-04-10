import { useState } from "react";
import Button from "./Button";

function CreateTab({ setTabs, setIsNaming }) {
  const [name, setName] = useState("");

  const handleClick = (name) => {
    setTabs((state) => [
      ...state,
      { name: name, body: {__html: `This is a new document...` }},
    ]);
    setIsNaming(false);
  };

  return (
    <div className="">
      <div className="text-2xl font-bold">Name yo shit</div>
      <input
        className="border-blue border-8"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Button onClick={() => handleClick(name)}>save tab</Button>
    </div>
  );
}

export default CreateTab;
