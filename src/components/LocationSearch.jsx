import { useState } from "react"

export default function LocationSearch({ placeholder, onSelect }) {

  const [query,setQuery] = useState("")
  const [results,setResults] = useState([])

  async function search(q){

    setQuery(q)

    if(q.length < 3){
      setResults([])
      return
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${q}`
    )

    const data = await res.json()

    setResults(data.slice(0,5))

  }

  return (

    <div className="search-box">

      <input
        value={query}
        placeholder={placeholder}
        onChange={(e)=>search(e.target.value)}
      />

      {results.length>0 && (

        <div className="suggestions">

          {results.map(r=>(
            <div
              key={r.place_id}
              onClick={()=>{

                onSelect([parseFloat(r.lat),parseFloat(r.lon)])
                setQuery(r.display_name)
                setResults([])

              }}
            >
              {r.display_name}
            </div>
          ))}

        </div>

      )}

    </div>

  )

}