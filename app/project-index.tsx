'use client'

import { useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import TechChips from './tech-chips'

type Row = {
  title: string
  kind: string
  blurb: string
  stack: string[]
  image: StaticImageData
}

export default function ProjectIndex({ rows }: { rows: Row[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Track the cursor without re-rendering: feed it to CSS via custom properties.
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = listRef.current
    if (!el) return
    el.style.setProperty('--px', `${e.clientX}px`)
    el.style.setProperty('--py', `${e.clientY}px`)
  }

  const showPreview = hovered !== null && open !== hovered

  return (
    <div
      className="index"
      ref={listRef}
      onPointerMove={handleMove}
      onPointerLeave={handleMove}
    >
      <ol
        className="index-list"
        onPointerLeave={() => setHovered(null)}
      >
        {rows.map((row, i) => {
          const isOpen = open === i
          return (
            <li key={row.title} className={hovered === i ? 'row is-hot' : 'row'}>
              <button
                type="button"
                className="row-head"
                aria-expanded={isOpen}
                aria-controls={`work-${i}`}
                onPointerEnter={() => setHovered(i)}
                onPointerLeave={() => setHovered(null)}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="idx mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="title">{row.title}</span>
                <span className="kind mono">{row.kind}</span>
                <span className="mark" aria-hidden="true" />
              </button>
              <div id={`work-${i}`} className={isOpen ? 'row-detail is-open' : 'row-detail'}>
                <div className="row-detail-clip">
                  <div className="row-detail-grid">
                    <div>
                      <p className="blurb">{row.blurb}</p>
                      <TechChips items={row.stack} />
                    </div>
                    <Image
                      src={row.image}
                      alt={`${row.title} screenshot`}
                      className="shot"
                      placeholder="blur"
                      sizes="(min-width: 760px) 420px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {showPreview && rows[hovered].image && (
        <div className="preview" aria-hidden="true">
          <Image src={rows[hovered].image} alt="" fill placeholder="blur" sizes="320px" />
        </div>
      )}
    </div>
  )
}
