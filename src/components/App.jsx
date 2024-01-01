import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

function App() {

  const [items, setItems] = useState([])

  function handleClearItems() {
    setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked : !item.checked} : item)));
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}

export default App
