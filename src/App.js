import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-conter gap-2 bg-white px-4 py-3 rounded-3xl">
          <button
           onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Red" }}>Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Green" }}>Green
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Blue" }}>Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "olive" }}>olive
          </button>
          <button
            onClick={() => setColor("Gray")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Gray" }}>Gray
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-Black"
            style={{ backgroundColor: "Yellow" }}>Yellow
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Pink" }}>Pink
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Purple" }}>Purple
          </button>
          <button
            onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-full text-Black"
            style={{ backgroundColor: "Lavender" }}>Lavender
          </button>
          <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-1 rounded-full text-Black"
            style={{ backgroundColor: "White" }}>White
          </button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Black" }}>Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
