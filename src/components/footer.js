import React from 'react'

function Footer() {
    return (
        <footer className="bg-primary-green-600">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://goosebumps.co.zw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goosebumps Collective
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/txndai/bts"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    )
}

export default Footer

