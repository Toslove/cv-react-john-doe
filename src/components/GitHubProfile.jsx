
import { useEffect, useState } from 'react'

function GitHubProfile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchProfile() {
      try {
        const response = await fetch(
          'https://api.github.com/users/github-john-doe',
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du profil')
        }

        const data = await response.json()
        setProfile(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchProfile()

    return () => controller.abort()
  }, [])

  if (loading) {
    return <p>Chargement du profil GitHub...</p>
  }

  if (error) {
    return <p>Impossible de charger le profil GitHub.</p>
  }

  if (!profile) {
    return <p>Aucun profil GitHub disponible.</p>
  }

  return (
    <div className="card p-4 text-center">
      <img
        src={profile.avatar_url}
        alt={`Avatar de ${profile.login}`}
        className="rounded-circle mx-auto mb-3"
        width="120"
        height="120"
      />

      <h2 className="h4">{profile.name || profile.login}</h2>

      <p>{profile.bio || 'Aucune biographie disponible.'}</p>

      <p>Dépôts publics : {profile.public_repos}</p>

      <p>Abonnés : {profile.followers}</p>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Voir le profil GitHub
      </a>
    </div>
  )
}

export default GitHubProfile
