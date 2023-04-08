import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './button';

import './css/style.css'

// Class Declaration, Variables, and Hashmap
let newDocIndex = 1;
let nameIndex = 1;

class documentProject {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  }

const newdocument = new documentProject('New-Document', 'This is a new document');

const myMap = new Map([
    [newdocument.title, newdocument.content]
]);


// Major Webpage Components

let navBar = (
    <div className="navBar">
        <ul className="navBar">
            <li className="item">Home</li>
            <li className="item">Projects</li>
            <li className="item">Settings</li>
        </ul>
    </div>
)

function Container() {
  const [tabIndex, setTabIndex] = useState([{index: 1}, {index: 2}]);
  return (
    //Project Index: Left Hand Side
    <div className ="container">
        <div className="document-index tab" id="document-index">
            <div className="document-element">

              {tabIndex.map(button => <Button/>)}

            </div>
        </div>
    </div>
)
}
let mainTab = (
    //Working Document Area: Center
    <div className="flex-box">

        <div className="tab" id="tab">
            <CreateTab title="New-Document" children='New-Document'>
            </CreateTab>
            <CreateTab title="New-Document1" children='New-Document1'>
            </CreateTab>
        </div>
        {/*<div className="editor">
            <button className="editorButton" onClick={() => bolded()}><strong>Bold</strong></button>
            <button className="editorButton" onClick={() => italicize()}><em>Italic</em></button>
            <button className="editorButton" onClick={() => anchor()}>Anchor</button>
</div>*/}
        <div className="mainDocument" contentEditable="true">
            <p id="mainText">Placeholder text...</p>
        </div>
    </div>
)
/*
let objectWindows = (
    //Object Panels: Right Hand Side
    <div className = "object-window">
        <div className ="object-panel">

        </div>
        <div className ="object-panel">

        </div>
    </div>
)
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
//const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root.render(navBar);

root1.render(<Container/>);
root2.render(mainTab);
//root3.render(RenderIndex());


function RenderIndex(props) {
  const index = props
  return index.map((index) => index);
}


function CreateButton({ title, children }) {
  return (
    <button className = {title + ' active'} onClick={() => openDocument(title)}>
      {children}
    </button>
  );
}
function CreateTab({title, children}) {
    return (
      <button className = {title + ' tablinks active'} onClick={() => openDocument(title)}>
        {children}
      </button>
    );
  }
// Everything below this is non-react javascript

function openDocument(docName) {
    console.log(docName)
      // Declare all variables
      var i, tablinks;

      // Update/Save content in map
      let saveTitle = document.querySelector('.active').innerHTML;
      let saveContent = document.getElementById("mainText").innerHTML;
      console.log(saveContent)
      myMap.set(saveTitle, saveContent);

      // Get all tablink content and remove active class
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Add the active class to the current selected tab
      let buttons = document.getElementsByClassName(docName);
      for(let i = 0; i < buttons.length; i++){
        buttons.item(i).className += " active";
      }

      // Show the current tabs content on the textArea
      document.getElementById("mainText").innerHTML = myMap.get(docName);
}

function createDocument(props){
    const newObject = new documentProject('New-Document' + newDocIndex, 'This is a new document');
    newDocIndex ++;

    // Creates a tab on the main document
    /*const newButton = document.createElement('button');
    newButton.innerHTML = newObject.title;;
    newButton.className = 'tablinks';
    myMap.set(newObject.title, newObject.content);
    newButton.classList.add(newObject.title);
    newButton.id = newObject.title + '-tab';*/
    //newButton.addEventListener("click", (event) => {
      //openDocument(event, newButton.innerHTML);
      //});

    //document.getElementById("tab").appendChild(tab);
    // Create a tab on the index of documents
    const indexButton = document.createElement('button');
    indexButton.innerHTML = newObject.title;
    indexButton.classList.add(newObject.title);
    indexButton.classList.add('document-element');
    indexButton.id = newObject.title + '-index';
    let oldName = indexButton.innerText;

    // Test for OnClick Events, Single, Double, Right Click

    //Left Button Click
    indexButton.onClick = event => {
        console.log("Single Click");
      }
      indexButton.ondblclick = event => {
        console.log('Double Click');
   }
   // Right Button Click
   indexButton.addEventListener('contextmenu', function(ev) {
      ev.preventDefault();
      console.log(indexButton);
      if(indexButton.children.namedItem('text') === null){
        oldName = indexButton.innerText;
        let text = document.createElement('input');
        text.id = 'text';
        let oldTitle = indexButton.innerText;
        indexButton.innerText = '';
        text.name = 'text';
        text.placeholder = oldName;
        indexButton.append(text);
      }
      else{
        let newText = document.getElementById('text').value;
        //syncTitle(oldName , newText);
      }
////// Need to Figure out new button Text
      return false;
      }, false);
      //document.getElementById("document-index").appendChild(indexButton);
      console.log(myMap);
}
/*
function syncTitle(oldTitle, newTitle){
  myMap.forEach(function (value, key) {
    if(key === oldTitle){
      let content = value;
      console.log("The value is" + content)
      let buttonTab = document.getElementById(key + '-tab')
      let buttonIndex = document.getElementById(key + '-index')
      console.log(buttonTab);
      console.log(buttonIndex);

      buttonTab.innerText = newTitle;
      buttonTab.className = buttonTab.className.replace( key, newTitle);
      buttonTab.id = newTitle + '-tab';
      buttonIndex.innerText = newTitle;
      buttonIndex.className = buttonIndex.className.replace( key, newTitle);
      buttonIndex.id = newTitle + '-index';

      myMap.delete(oldTitle);
      myMap.set(newTitle, content);
    }
  })
}
function anchor(event){
  replaceSelectedText('section');
  let sel = window.getSelection();
  let range = sel.getRangeAt(0);
  createAnchor(range);
}
function createAnchor(range){
  let anchors = document.getElementsByClassName('anchor');
  /*for(let i = 0; i < anchors.length; i++){
    console.log(anchors.item(i))
  }
  const newAnchor = document.createElement('a');
  newAnchor.href = '#anchor'
  newAnchor.innerText = 'Anchor'
  newAnchor.target = 'iframe_a'
  console.log(anchors.item(0))
  console.log(newAnchor);
  document.getElementById("quick-links").appendChild(newAnchor);

}

function bolded(event){
  replaceSelectedText('strong');
}

function italicize(event){
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
          if(element = 'a'){
            console.log("It's an anchor!");
            newElement.id = 'anchor';
          }
          // and give it some content
          const newContent = document.createTextNode(newText);

          // add the text node to the newly created div
          newElement.appendChild(newContent);
          range.insertNode(newElement);
          }
  } else {
    console.log("No text selected")
  }
}*/
