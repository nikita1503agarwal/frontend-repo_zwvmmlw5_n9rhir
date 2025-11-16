import React from 'react'

function getEmbedUrl(url) {
  if (!url) return null
  try {
    const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/)
    if (yt) return `https://www.youtube.com/embed/${yt[1]}`
    const vimeo = url.match(/vimeo\.com\/(\d+)/)
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
    return url
  } catch {
    return url
  }
}

function Highlights({ title = 'Best Highlights', url, description }) {
  const embed = getEmbedUrl(url)
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-black">
          {embed ? (
            embed.startsWith('http') ? (
              <iframe
                src={embed}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={url} controls className="w-full h-full" />
            )
          ) : (
            <div className="w-full h-full grid place-items-center text-gray-400">Add highlight video URL</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Highlights
