import React from 'react'

export default function Nav() {
  return (
    <nav className="flex justify-between py-12 px-10">
      {/* logo */}
      <div>
        <h1>Logo</h1>
      </div>
      {/* menu */}
      <div>
        <ul className="flex gap-12">
          <li>A propos</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
