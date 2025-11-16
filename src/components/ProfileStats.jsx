import React from 'react'

function ProfileStats({ player }) {
  const stat = (label, value) => (
    <div className="p-4 rounded-lg bg-gray-50">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 font-semibold text-gray-900">{value || '—'}</div>
    </div>
  )

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Player Profile & Stats</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stat('Height (cm)', player.height_cm)}
          {stat('Weight (kg)', player.weight_kg)}
          {stat('Dominant Foot', player.dominant_foot)}
          {stat('Main Position', player.main_position || player.position)}
        </div>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stat('Secondary Positions', player.secondary_positions?.join(', '))}
          {stat('Current Club', player.current_club)}
          {stat('Past Clubs', player.past_clubs?.join(', '))}
          {stat('Country', player.country)}
        </div>

        {player.bio && (
          <p className="mt-6 text-gray-700 leading-relaxed">{player.bio}</p>
        )}

        {player.stats && player.stats.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">Key Stats per Season</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="py-2 pr-6">Season</th>
                    <th className="py-2 pr-6">Club</th>
                    <th className="py-2 pr-6">League</th>
                    <th className="py-2 pr-6">Games</th>
                    <th className="py-2 pr-6">Goals</th>
                    <th className="py-2 pr-6">Assists</th>
                    <th className="py-2 pr-6">Clean Sheets</th>
                    <th className="py-2 pr-6">Minutes</th>
                  </tr>
                </thead>
                <tbody>
                  {player.stats.map((s, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="py-2 pr-6">{s.season}</td>
                      <td className="py-2 pr-6">{s.club || '—'}</td>
                      <td className="py-2 pr-6">{s.league || '—'}</td>
                      <td className="py-2 pr-6">{s.games ?? '—'}</td>
                      <td className="py-2 pr-6">{s.goals ?? '—'}</td>
                      <td className="py-2 pr-6">{s.assists ?? '—'}</td>
                      <td className="py-2 pr-6">{s.clean_sheets ?? '—'}</td>
                      <td className="py-2 pr-6">{s.minutes ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProfileStats
