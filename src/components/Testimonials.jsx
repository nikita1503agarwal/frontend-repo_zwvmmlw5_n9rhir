import React from 'react'

function Testimonials({ testimonials = [] }) {
  const data = testimonials.length > 0 ? testimonials : [
    { quote: '"A disciplined professional with great vision and decision-making under pressure."', author: 'Coach Name', role: 'Head Coach' },
    { quote: '"Top mentality, team leader, and consistent performer every match."', author: 'Scout Name', role: 'Senior Scout' },
  ]

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Coach / Scout Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {data.map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border">
              <p className="text-gray-800 text-lg leading-relaxed">{t.quote}</p>
              {(t.author || t.role) && (
                <div className="mt-4 text-sm text-gray-600">{t.author}{t.role ? `, ${t.role}` : ''}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )}

export default Testimonials
