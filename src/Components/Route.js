import { useEffect } from "react"

//children = props of accordion
const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChange = window.addEventListener(
      "popstate",
      onLocationChange,
      { capture: true }
    )

    return () => {
      window.removeEventListener("popstate", onLocationChange, {
        capture: true,
      })
    }
  }, [])
  return window.location.pathname === path ? children : null
}

export default Route
