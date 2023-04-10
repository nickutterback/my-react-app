import QuickLinks from "./QuickLinks";
import { useRef } from "react";

function TextMenu({indices, setIndices, selected}) {

  function anchor(){
    replaceSelectedText('section');
  }
  function bolded(){
      replaceSelectedText('strong');
    }

  function italicize(){
      replaceSelectedText('em')
    }

  function replaceSelectedText(element) {
      var sel, range;
      if (window.getSelection) {
          sel = window.getSelection();
          if (sel.rangeCount) {
              range = sel.getRangeAt(0);
              let newText = sel.toString();
              range.deleteContents();
                // create a new div element
              const newElement = document.createElement(element);
              newElement.className = 'inline'
              // and give it some content
              const newContent = document.createTextNode(newText);
              // add the text node to the newly created div
              newElement.appendChild(newContent);
              range.insertNode(newElement);
              if(element == 'section'){

                setIndices((state) => [
                  ...state,
                  { tab: selected, anchor: newElement},
                ]);

                console.log(newElement);
              }
              }
      } else {
        console.log("No text selected")
      }
    }


    return (
        <div>
            <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer p-3"
            onClick={() => bolded()}>
                Bold
            </button>
            <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer p-3"
            onClick={() => italicize()}>
                Italic
            </button>
            <button className="bg-red-500 hover:bg-red-600 hover:cursor-pointer p-3"
            onClick={() => {anchor()}}>
                Anchor
            </button>
        </div>

    );
}

/*function anchor(){
  replaceSelectedText('section');
}
function bolded(){
    replaceSelectedText('strong');
  }

function italicize(){
    replaceSelectedText('em')
  }

function replaceSelectedText(element) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            let newText = sel.toString();
            range.deleteContents();
              // create a new div element
            const newElement = document.createElement(element);

            // and give it some content
            const newContent = document.createTextNode(newText);

            if(element == 'section'){
              setIndices((state) => [
                ...state,
                { tab: selected, anchor: newElement},
              ]);
              console.log(indices)
            }
            // add the text node to the newly created div
            newElement.appendChild(newContent);
            range.insertNode(newElement);
            }
    } else {
      console.log("No text selected")
    }
  }*/

  export default TextMenu
