import { footerLinks } from '@/lib/data'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-x-clip">
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.link}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <span>
                  <FiArrowUpRight />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
