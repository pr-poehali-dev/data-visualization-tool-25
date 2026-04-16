import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [sent, setSent] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handler = () => setModalOpen(true)
    document.addEventListener("open-modal", handler)
    return () => document.removeEventListener("open-modal", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [modalOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setModalOpen(false); setSent(false) }, 2500)
  }

  const bantItems = [
    { letter: "B", title: "Budget", desc: "от 100к ₽/мес на SEO или рекламу" },
    { letter: "A", title: "Authority", desc: "Лицо, принимающее решения (ЛПР)" },
    { letter: "N", title: "Need", desc: "Конкретная задача на рост" },
    { letter: "T", title: "Timeline", desc: "Готов начать через 1–3 месяца" },
  ]

  const columns = [
    {
      color: "green",
      title: "Подходят",
      icon: "✓",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      items: [
        "SEO-продвижение коммерческих сайтов",
        "Контекстная реклама (Яндекс, VK)",
        "Лиды, квалифицированные по BANT",
        "Бюджет от 100к+ ₽/мес",
        "ЛПР есть, старт в 1–3 мес.",
      ],
    },
    {
      color: "red",
      title: "Не берём",
      icon: "✕",
      bg: "bg-red-50",
      border: "border-red-200",
      titleColor: "text-red-700",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      items: [
        "Участники тендеров",
        "Рассматривают 3+ агентства",
        "Регионы +4ч от Москвы (без оговорок)",
        "Нет ЛПР или бюджет не подтверждён",
        "Клиент уже работает с другим агентством",
      ],
    },
    {
      color: "gray",
      title: "Мусор",
      icon: "✗",
      bg: "bg-gray-50",
      border: "border-gray-200",
      titleColor: "text-gray-600",
      iconBg: "bg-gray-200",
      iconColor: "text-gray-500",
      items: [
        "«Тильду в ТОП-1 за 2 месяца»",
        "«Без бюджета, но нужен результат»",
        "Нет сайта, нет продукта",
        "«Хочу как у конкурента за 15к»",
        "SEO для сайта-визитки без трафика",
      ],
    },
  ]

  return (
    <>
      {/* Section 2: Leads qualification */}
      <section ref={sectionRef} id="leads" className="py-24 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Квалификация
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Какие лиды нам передавать,<br className="hidden md:block" /> а какие — нет
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Хороший лид = быстрая сделка = ваше вознаграждение уже через 10 дней
            </p>
          </div>

          {/* BANT checklist */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {bantItems.map((item) => (
              <div key={item.letter} className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-base flex items-center justify-center shrink-0">
                  {item.letter}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3 columns */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {columns.map((col) => (
              <div key={col.title} className={`rounded-2xl border-2 ${col.border} ${col.bg} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg ${col.iconBg} ${col.iconColor} font-bold text-base flex items-center justify-center`}>
                    {col.icon}
                  </div>
                  <h3 className={`font-bold text-lg ${col.titleColor}`}>{col.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`mt-0.5 ${col.iconColor} font-bold`}>{col.icon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-modal"))}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Задать вопрос
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500 text-sm">Свяжемся с вами в течение одного рабочего дня</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Стать партнёром</h3>
                  <p className="text-gray-500 text-sm">Расскажите о себе — свяжемся и ответим на вопросы</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 text-sm transition-colors"
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 text-sm transition-colors"
                      placeholder="ivan@company.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 text-sm transition-colors"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-colors mt-2"
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
