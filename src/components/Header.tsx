import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-900 tracking-tight">
            Агентство
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">О программе</a>
            <a href="#leads" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Какие лиды</a>
            <a href="#footer" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Контакты</a>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-modal"))}
              className="text-sm font-semibold px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Стать партнёром
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Меню"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-300 mb-1 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity duration-300 mb-1 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-48 pb-4" : "max-h-0"}`}>
          <div className="flex flex-col gap-3 pt-2">
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-blue-600 py-1">О программе</a>
            <a href="#leads" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-blue-600 py-1">Какие лиды</a>
            <a href="#footer" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-blue-600 py-1">Контакты</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
