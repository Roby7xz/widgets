import React, { useState } from "react";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is FE JS Framework."
  },
  {
    title: "Why React?",
    content: "Everyone loves it."
  },
  {
    title: "Do you like it?",
    content: "I like it so much."
  }
];

const options = [
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Blue",
    value: "blue"
  }
];


function App() {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
