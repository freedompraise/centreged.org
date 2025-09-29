import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 max-w-md">
            <Logo variant="full" className="mb-4" />
            <p className="text-sm text-gray-300">
              The African Centre for Governance, Economy and Development (CentreGED) is dedicated to fostering leadership excellence and promoting sustainable economic development across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/operations/diplomacy" className="text-gray-300 hover:text-gold transition-colors">
                    Diplomacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Operations</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/operations/research" className="text-gray-300 hover:text-gold transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link to="/operations/capacity-building" className="text-gray-300 hover:text-gold transition-colors">
                    Capacity Building
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  Phone:{' '}
                  <a href="tel:+2347083868130" className="hover:text-gold transition-colors">
                    +2347083868130
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} The African Centre for Governance, Economy and Development (CentreGED). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
