import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charger", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handelItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelTogellItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClearAll() {
    const conedermed = window.confirm("are you sure to delete all iteams ?");
    if (conedermed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addHandelItem={handelItems} />
      <PackingList
        items={items}
        handelDeleteItem={handelDeleteItem}
        handelTogellItem={handelTogellItem}
        handelClearAll={handelClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form({ addHandelItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuanity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    addHandelItem(newItem);
    setDescription("");
    setQuanity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for trip?</h3>
      <select value={quantity} onChange={(e) => setQuanity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items...."
        value={description}
        onChange={(e) => {
          // console.log(e.target);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({
  items,
  handelDeleteItem,
  handelTogellItem,
  handelClearAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handelDeleteItem={handelDeleteItem}
            handelTogellItem={handelTogellItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> sort by input order </option>
          <option value="description"> sort by description order </option>
          <option value="packed"> sort by packed order </option>
        </select>
        <button onClick={handelClearAll}>clear all </button>
      </div>
    </div>
  );
}

function Item({ item, handelDeleteItem, handelTogellItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handelTogellItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        style={{ color: "red" }}
        onClick={() => handelDeleteItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your Packing List</em>
      </p>
    );
  const numItems = items.length;
  const numItemPakad = items.filter((item) => item.packed).length;
  const percntage = Math.round((numItemPakad / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percntage === 100
          ? " you got every thing ready to go "
          : ` you have  ${numItems} in your list, and you
        already packed ${numItemPakad} (${percntage}%) `}
      </em>
    </footer>
  );
}
