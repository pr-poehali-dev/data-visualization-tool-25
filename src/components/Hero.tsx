import { useEffect, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section
      id="hero"
      className="relative pt-16 min-h-[70vh] flex flex-col justify-center items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a3a6b 0%, #1e4fa8 40%, #2563eb 70%, #60a5fa 100%)" }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
        {/* Overline */}
        <div className={`text-center mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-block text-blue-200 text-sm font-semibold tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full">
            Партнёрская программа
          </span>
        </div>

        {/* H1 */}
        <h1 className={`text-center text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl mx-auto transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Почему с нами партнёрам<br className="hidden md:block" /> выгодно и спокойно
        </h1>

        {/* Subheading */}
        <p className={`text-center text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Мы — надёжный партнёр с длинным LTV, сильными продажами и прозрачными выплатами
        </p>

        {/* 3 Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Card 1 - Надёжность */}
          <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Надёжность</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Работаем по договору, платим стабильно за лиды. <span className="font-semibold text-blue-700">LTV клиентов 10+ месяцев</span></p>
          </div>

          {/* Card 2 - Продажи */}
          <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Продажи</h3>
            <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold text-orange-600">CR лид→продажа 28%.</span> Крупные проекты: реклама от 500к ₽/мес., 5+ регионов; SEO топ-10 по 100+ ключам</p>
          </div>

          {/* Card 3 - Заработок */}
          <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">Заработок</h3>
            <p className="text-gray-600 text-sm leading-relaxed"><span className="font-semibold text-green-700">15% от LTV.</span> Пример: 60к/мес × 10 мес = <span className="font-bold text-green-700">90к</span> комиссии. Окупает маркетинг партнёра</p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-center text-blue-200 text-xs font-semibold tracking-widest uppercase mb-6">Таймлайн сделки</p>
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute top-4 left-8 right-8 h-0.5 bg-white/30" />
            {/* Arrow on line */}
            <div className="absolute top-[14px] right-6 w-0 h-0" style={{ borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid rgba(255,255,255,0.3)" }} />
            <div className="grid grid-cols-4 gap-2 relative z-10">
              {[
                { time: "1 день", label: "Связь" },
                { time: "3 дня", label: "Бриф" },
                { time: "5 дней", label: "КП" },
                { time: "10 дней", label: "Старт" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-700 font-bold text-xs flex items-center justify-center shadow-lg border-2 border-blue-200">
                    {i + 1}
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">{item.time}</p>
                    <p className="text-blue-200 text-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-modal"))}
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Начать партнёрство
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
