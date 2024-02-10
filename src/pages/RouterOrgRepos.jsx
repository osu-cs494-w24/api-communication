import { useParams } from 'react-router-dom'

export default function OrgRepos() {
    const { org } = useParams()

    return (
        <>
            <h1>GitHub Repos for {org}</h1>
            <main>
                {/* Render repos here... */}
            </main>
        </>
    )
}
