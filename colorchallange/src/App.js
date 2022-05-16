
import Square from "./Square";
import Input from "./Input";
import {useState} from "react";

function App() {
    const [colorValue, setColorValue] = useState('');
    const [hexValue, setHexValue] = useState('')
    const[isDarkTest, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Square colorValue={colorValue}
                hexValue={hexValue}
                isDarkTest={isDarkTest}/>
      <Input colorValue={colorValue}
            setColorValue={setColorValue}
            hexValue={hexValue}
            setHexValue={setHexValue}
             isDarkTest={isDarkTest}
             setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
