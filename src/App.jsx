import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ProfileStats from './components/ProfileStats'
import LinksMedia from './components/LinksMedia'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'

function App() {
  const [player, setPlayer] = useState(null)
  const [slug, setSlug] = useState('john-doe')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/players/${slug}`)
        if (res.ok) {
          const data = await res.json()
          setPlayer(data)
        } else {
          // fallback demo data for first-time view
          setPlayer({
            slug: 'john-doe',
            name: 'John Doe',
            position: 'Forward',
            age: 22,
            country: 'USA',
            current_club: 'City FC',
            league: 'MLS',
            photo_url: '',
            highlight_title: 'Best Highlights',
            highlight_url: '',
            highlight_description: 'A quick look at goals, assists, and pressing actions.',
            height_cm: 182,
            weight_kg: 77,
            dominant_foot: 'Right',
            main_position: 'ST',
            secondary_positions: ['RW', 'LW'],
            past_clubs: ['Academy U19'],
            bio: 'Dynamic striker with strong movement off the ball and clinical finishing inside the box.',
            links: [
              { title: 'Transfermarkt', url: 'https://www.transfermarkt.com', icon: 'Globe' },
              { title: 'Full Match Playlist', url: 'https://youtube.com', icon: 'Youtube' },
              { title: 'CV (PDF)', url: '#', icon: 'FileText' },
            ],
            stats: [
              { season: '2023/24', club: 'City FC', league: 'MLS', games: 28, goals: 15, assists: 6, minutes: 2100 },
              { season: '2022/23', club: 'City FC', league: 'MLS', games: 21, goals: 9, assists: 4, minutes: 1500 },
            ],
            contact_email: 'player@example.com',
          })
        }
      } catch (e) {
        // ignore, show demo data
      }
    }
    fetchPlayer()
  }, [slug])

  if (!player) return null

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero player={player} />
      <Highlights title={player.highlight_title} url={player.highlight_url} description={player.highlight_description} />
      <ProfileStats player={player} />
      <LinksMedia links={player.links} />
      <Testimonials />
      <ContactForm player={player} />
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} {player.name}. All rights reserved.</footer>
    </div>
  )
}

export default App
