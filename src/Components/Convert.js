import { useEffect, useState } from "react"
import React from "react"
import axios from "axios"

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("")
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      )
      setTranslated(data.data.translations[0].translatedText)
    }
    if (text && !translated) {
      doTranslation()
    } else {
      const timeoutId = setTimeout(() => {
        if (text) {
          doTranslation()
        }
      }, 1000)
      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [language, text])
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}

export default Convert
