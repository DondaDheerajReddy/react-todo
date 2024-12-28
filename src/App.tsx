import { useState, MouseEvent } from "react";
import List from "./components/List";
import InputArea from "./components/InputArea";

function App() {
  function handleClick(e: MouseEvent, text: string) {
    e.preventDefault();
    if (text.trim()) {
      setItems((prevState) => {
        return [...prevState, text];
      });
    }
  }
  function deleteItem(id: number) {
    setItems((prevState) => {
      return prevState.filter((_, index) => index !== id);
    });
  }
  const [items, setItems] = useState<string[]>([]);
  return (
    <div className="app">
      <div className="todo">
        <InputArea
          type="text"
          placeholder="Add task"
          handleClick={handleClick}
        ></InputArea>

        {items.map((item, index) => (
          <List key={index} id={index} onCheck={deleteItem} item={item}></List>
        ))}
      </div>
    </div>
  );
}

export default App;
