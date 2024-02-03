import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Heading from "./components/Heading";
import InputItems from "./components/InputItems";
import ListItems from "./components/ListItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [items, setItems] = useState([]);
  function handleInput(event) {
    if (event.key === "Enter") {
      let itemvalue = event.target.value;
      if (items.includes(itemvalue)) {
        return;
      }
      let newitems = [...items, itemvalue];
      setItems(newitems);
    }
  }
  return (
    <div className="flex justify-center py-2 bg-gray-700 min-h-screen w-screen">
      <Container>
        <Heading />
        <InputItems handleInput={handleInput} />
        <div className="bg-gray-500 rounded-md py-3 shadow-sm shadow-black px-2">
          {items.length === 0 && <ErrorMessage />}
          <ListItems items={items} setItems={setItems}/>
        </div>
      </Container>
    </div>
  );
}

export default App;
