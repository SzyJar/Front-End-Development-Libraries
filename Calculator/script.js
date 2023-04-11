import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useState } from "https://cdn.skypack.dev/react@17.0.1";

function ReactApp() {
  const [infoText, setInfoText] = useState('');
  const [text, setText] = useState('0');
  
  function clear(){
    setText('0');
    setInfoText('');
  };
  
  function insert(value){
    if (text !== '0'){
      setText(text+value);
    } else {
      setText(value);
    };
    if (text.length >= 20) {
      setText("Input too long.        ");
    };
  };
  
  function dot(){
    if (!(text.includes("."))){
      setText(text + '.');
    };
  };
  
  function operation(type){
    let newText = infoText;
    if (((text == '0') || (text == '-')) &&(newText.length > 0) && (isNaN(parseInt(newText.slice(-1))))) {
      if(type == '-'){
        setText('-')
      } else {
        newText = newText.slice(0, -1);
        setInfoText(newText + type);
        setText('0');
      }; 
    } else {
      if (newText.includes("=")){
        newText = '';
      };
      setInfoText(newText + text + type);
      setText('0');
    };
     if (text.length >= 20){
       setText("Input too long.        ");
       setInfoText('');
     };
     if (infoText.length >= 23){
       setInfoText("Value too long.        ");
     };
  };
  
  function equals(){
    if (infoText !== ''){
      const result = eval(infoText + text);
      setText(result);
      setInfoText(infoText + text + '=' + result)
    };
    if (infoText.length >= 23){
       setInfoText("Value too long.        ");
     };
  };
  
    return(
    <div id="calc">
        <div class="text" id="info">{infoText}</div>
        <div class="text" id="display">{text}</div>
        <div id="keypad">
         <button id="clear" onClick={() => clear()}>AC</button>
         <div id="operations">
         <button id="equals" onClick={() => equals()}>=</button>
         <button id="add" onClick={() => operation('+')}>+</button>
         <button id="subtract" onClick={() => operation('-')}>-</button>
         <button id="multiply" onClick={() => operation('*')}>*</button>
         <button id="divide" onClick={() => operation('/')}>/</button>
         </div>
         <div id="numbers">   
           <button id="seven" onClick={() => insert('7')}>7</button>
           <button id="eight" onClick={() => insert('8')}>8</button>
           <button id="nine" onClick={() => insert('9')}>9</button>
           <button id="four" onClick={() => insert('4')}>4</button>
           <button id="five" onClick={() => insert('5')}>5</button>
           <button id="six" onClick={() => insert('6')}>6</button>
           <button id="one" onClick={() => insert('1')}>1</button>
           <button id="two" onClick={() => insert('2')}>2</button>
           <button id="three" onClick={() => insert('3')}>3</button>
           <button id="zero" onClick={() => insert('0')}>0</button>
           <button id="decimal" onClick={() => dot()}>.</button>
          </div>
        </div>
    </div>
  );
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));