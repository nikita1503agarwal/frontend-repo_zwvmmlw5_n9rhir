import React from 'react'
import { ExternalLink, FileText, Youtube, Link as LinkIcon, Video, Globe } from 'lucide-react'

const iconMap = {
  ExternalLink,
  FileText,
  Youtube,
  Link: LinkIcon,
  Video,
  Globe,
}

function LinksMedia({ links = [] }) {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Links & Media</h2>
        {links.length === 0 ? (
          <p className="mt-3 text-gray-600">Add custom links like Transfermarkt, InStat, Wyscout, social media, full match videos, Google Drive, CV PDF, etc.</p>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((l, idx) => {
              const Icon = iconMap[l.icon] || ExternalLink
              return (
                <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="group p-4 rounded-lg border bg-white hover:shadow-md transition">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-md bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition">
                      <Icon size={18} />
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-gray-900">{l.title}</div>
                      <div className="text-xs text-gray-500 truncate max-w-xs">{l.url}</div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default LinksMedia
