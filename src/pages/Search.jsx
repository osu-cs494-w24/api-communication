import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ inputQuery, setInputQuery ] = useState(searchParams.get("q") || "")

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <h2>Search query: {searchParams.get("q")}</h2>
        </div>
    )
}

export default Search
