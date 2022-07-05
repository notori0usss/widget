import React, { useState } from "react"
import Dropdown from "./Components/Dropdown"
// import Accordion from "./Components/Accordion"
// import Search from "./Components/Search"

// const items = [
//   {
//     title: "What is React?",
//     content: "React is very nice lovelyl thing",
//   },
//   {
//     title: "Why React?",
//     content: "Cus zucc introduced it. heehe",
//   },
//   {
//     title: "How do you use React?",
//     content: "Installing node and npm install react",
//   },
// ]
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
]
const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <h1>Widget App</h1>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      ></Dropdown>
    </div>
  )
}

export default App
