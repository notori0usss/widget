import React, { useState } from "react"

const Dropdown = ({ colors }) => {
  const [selection, setSelection] = useState("")

  return (
    <div>
      <ul>
        <li>{colors[0].label}</li>
      </ul>
    </div>
  )
}

export default Dropdown
