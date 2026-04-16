export function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-3">Агентство</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Партнёрская программа для тех, кто умеет находить клиентов.<br />15% от LTV, договор, стабильные выплаты.
            </p>
          </div>
          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Договор партнёра</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
            </nav>
          </div>
          {/* Contacts */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Контакты</p>
            <nav className="flex flex-col gap-3">
              <a href="tel:+74951234567" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (495) 123-45-67
              </a>
              <a href="mailto:partners@agency.ru" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                partners@agency.ru
              </a>
              <a href="https://t.me/agency" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                Telegram
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2026 Ваше агентство. Все права защищены.</p>
          <p className="text-xs text-gray-600">Платим честно и в срок</p>
        </div>
      </div>
    </footer>
  )
}
