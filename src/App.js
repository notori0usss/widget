import React, { useState } from "react"
import Translate from "./Components/Translate"
import Accordion from "./Components/Accordion"
import Search from "./Components/Search"
import Dropdown from "./Components/Dropdown"
import Route from "./Components/Route"
import Header from "./Components/Header"

const items = [
  {
    title: "What is React?",
    content: "React is very nice lovelyl thing",
  },
  {
    title: "Why React?",
    content: "Cus zucc introduced it. heehe",
  },
  {
    title: "How do you use React?",
    content: "Installing node and npm install react",
  },
]
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
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App
