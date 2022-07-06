import React, { useState } from "react"
import Convert from "./Convert"
import Dropdown from "./Dropdown"
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Nepali",
    value: "ne",
  },
]
const Translate = () => {
  const [language, setLanguage] = useState(options[3])
  const [text, setText] = useState("Greetings!")

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter your text here!</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  )
}

export default Translate
