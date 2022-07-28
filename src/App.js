import React from "react";
import Accoridon from "./components/Accoridon";
import Search from "./components/Search";

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

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
