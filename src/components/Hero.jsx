import React from 'react'

function Hero({ player }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              {player.name}
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              {player.position} • {player.country || '—'}{player.age ? ` • ${player.age} y/o` : ''}
            </p>
            <p className="mt-1 text-gray-600">
              {player.current_club || 'Club'}{player.league ? ` • ${player.league}` : ''}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            {player.photo_url ? (
              <img
                src={player.photo_url}
                alt={`${player.name} profile`}
                className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-xl ring-1 ring-black/5"
              />
            ) : (
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                Upload Photo
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
