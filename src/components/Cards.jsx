import { useState, useRef } from "react"
import { Bookmark } from "../Icons"

export const Cards = ({ title, description, categories, url }) => {
  console.log()
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <a
      href={url}
      target="_blank"
      referrerPolicy="no-referrer"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-neutral-900 relative overflow-hidden rounded-xl p-3 shadow-2xl flex flex-col h-full w-full"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 30%)`
        }}
      />
      <div className="flex justify-between mb-3">
        <h3 className="text-xl font-medium tracking-tight text-white">{title}</h3>
        <button type="button" className="opacity-0 group-hover:opacity-100 transition-all ease-in">
          <Bookmark className="text-white" />
        </button>
      </div>
      <ul className="flex gap-2 flex-wrap uppercase text-xs text-neutral-600 font-bold mb-2">
        {categories.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-neutral-400 leading-tight flex-grow">
        {description}
      </p>
    </a>
  )
}
