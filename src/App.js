import { menuOptions } from "./data";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <div className="container-box">
      <div className="text-center">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="d-flex content-center my-4">
        {menuOptions.map((option, index) => {
          return (
            <button key={index} className="menu-option">
              {option}
            </button>
          );
        })}
      </div>
      <div className="row">
          <MenuItem />
      </div>
    </div>
  );
}

export default App;
