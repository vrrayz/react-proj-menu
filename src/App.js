import React, {useState} from "react";
import { menuOptions, menuItems } from "./data";
import MenuItem from "./components/MenuItem";

function App() {
  const [items, setItems] = useState(menuItems)

  const selectOption = (option) =>{
    console.log(option)
    if(option !== "all"){
      setItems(menuItems.filter(item => item.option === option))
    }else{
      setItems(menuItems)
    }
  }

  return (
    <div className="container-box">
      <div className="text-center">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="d-flex content-center my-4">
        {menuOptions.map((option, index) => {
          return (
            <button key={index} onClick={() => selectOption(option)} className="menu-option">
              {option}
            </button>
          );
        })}
      </div>
      <div className="row">
          {items.map(item => {
            return <MenuItem key={item.id} item={item} />
          })}
      </div>
    </div>
  );
}

export default App;
