import React from "react"
import Translate from "./Components/Translate"
import Accordion from "./Components/Accordion"
import Search from "./Components/Search"
import Dropdown from "./Components/Dropdown"

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

const showAccordian = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />
  }
}
const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />
  }
}
const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
      // label={label}
      // options={options}
      // selected={selected}
      // setSelected={setSelected}
      />
    )
  }
}

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />
  }
}
const App = () => {
  return (
    <div>
      {showAccordian()}
      {showDropdown()}
      {showList()}
      {showTranslate()}
    </div>
  )
}

export default App
