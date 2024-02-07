import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

export default function Search() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const query = searchParams.get("q")
    const [ inputQuery, setInputQuery ] = useState(query || "")
    const [ repos, setRepos ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchSearchResults() {
            setLoading(true)
            try {
                // throw new Error("woops!")
                const response = await fetch(
                    `https://api.github.com/search/repositories?q=${query}`,
                    { signal: controller.signal }
                )
                const responseBody = await response.json()
                console.log("== responseBody:", responseBody)
                setLoading(false)
                setError(null)
                setRepos(responseBody.items || [])
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("HTTP request was aborted")
                } else {
                    console.error(err)
                    setError(err)
                }
            }
        }
        if (query) {
            fetchSearchResults()
        }
        return () => controller.abort()
    }, [ query ])

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <h2>Search query: {query}</h2>
            {error && <ErrorContainer>Error: {error.message}</ErrorContainer>}
            {loading && <Spinner />}
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.full_name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
