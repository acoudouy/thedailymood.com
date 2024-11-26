import Link from 'next/link'
import { Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#2D1B69] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-[#EC877F] transition-colors"
            >
              DailyMood
            </Link>
          </div>
          {/* <nav className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            <Link href="/terms" className="hover:text-[#EC877F] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-[#EC877F] transition-colors">
              Privacy Policy
            </Link>
          </nav> */}
          <div className="flex items-center space-x-4">
            {/* <a
              href="https://github.com/yourusername/dailymood"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EC877F] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a> */}
            <p className="text-sm">
              &copy; {new Date().getFullYear()} DailyMood. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
