import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 p-4 border-t border-gray-800 mt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            NETFLIX
          </h2>
          <p className="mt-4 text-sm">
            Discover and watch your favorite movies and series.
          </p>
        </div>

        {/* Navigation */}

        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white cursor-pointer">Home</Link></li>
            <li><Link to="/movies" className="hover:text-white cursor-pointer">Movies</Link></li>
            <li><Link to="/series" className="hover:text-white cursor-pointer">Series</Link></li>
            <li><Link to="/animation" className="hover:text-white cursor-pointer">Animation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/watchlist" className="hover:text-white cursor-pointer">Watchlist</Link></li>
            <li><Link to="/history" className="hover:text-white cursor-pointer">History</Link></li>
            <li><Link to="/settings" className="hover:text-white cursor-pointer">Settigs</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/Terms and Service" className="hover:text-white cursor-pointer">Terms of service</Link></li>
            <li><Link to="/Privacy Policy" className="hover:text-white cursor-pointer">Privacy Policy</Link></li>
            <li><Link to="/DMCA" className="hover:text-white cursor-pointer">DMCA</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs border-t border-gray-800 pt-6">
        © 2026 NETFlix. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer