import React, { useEffect, useState } from "react"
import axios from "axios"
const Search = () => {
  const [term, setTerm] = useState("Swaroop Dhungana")
  const [results, setResults] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      })
      setResults(data.query.search)
    }
    //check if term is null or empty string

    fetchData()
  }, [term])
  const onInputChange = (e) => {
    setTerm(e.target.value)
  }

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org/w/api.php?${result.pageid}`}
            className="ui button pink"
          >
            Goto Article
          </a>
        </div>
        <div className="content">
          <div className="header">
            <h2>{result.title}</h2>
          </div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })
  return (
    <form className="ui form" onSubmit={(e) => e.preventDefault()}>
      <div className="field">
        <label>Enter Search Term:</label>
        <input
          className="input"
          type="text"
          placeholder="Eg: Programming"
          onChange={onInputChange}
          value={term}
        />
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </form>
  )
}

export default Search
