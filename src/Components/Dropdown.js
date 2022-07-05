import React, { useEffect, useRef, useState } from "react"

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener("click", onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener("click", onBodyClick, { capture: true })
    }
  }, [])
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <div className="label">Select a color</div>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""} `}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div
            className={`menu ${open ? "visible transition" : ""}`}
            onClick={() => {
              setOpen(!open)
            }}
          >
            {renderedOptions}
          </div>
        </div>
        <div>Your choice color is here!</div>
      </div>
    </div>
  )
}

export default Dropdown
