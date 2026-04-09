import type React from "react"
import { useEffect, useRef, useState } from "react"

const qualificationItems = [
  {
    label: "Бюджет",
    good: "от 300 тыс. руб./мес на рекламу или от 100 тыс. руб./мес на SEO",
    bad: "«Нет бюджета, но хотим результат»",
  },
  {
    label: "ЛПР",
    good: "Вы общались с директором или маркетологом, у которого есть бюджет",
    bad: "Контакт нашёл сам клиент — передал «порекомендовали»",
  },
  {
    label: "Потребность",
    good: "Чёткая задача: масштабировать трафик, выйти в новые регионы, улучшить позиции",
    bad: "«Хочет Тильду продвинуть в ТОП-1 по e-commerce за 2 месяца»",
  },
  {
    label: "Сроки",
    good: "Готов начать в течение 1 месяца",
    bad: "Участвует в тендере или рассматривает 3+ агентства одновременно",
  },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <>
      {/* Qualification Block */}
      <section className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-20">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Квалификация лидов
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Какие лиды
              <span className="italic"> нам нужны</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Хороший лид = быстрая сделка = ваши деньги. Проверьте клиента по четырём критериям перед передачей.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {qualificationItems.map((item) => (
              <div key={item.label} className="bg-background grid md:grid-cols-12 gap-0">
                <div className="md:col-span-2 p-8 border-r border-border flex items-center">
                  <p className="font-serif text-2xl text-sage">{item.label}</p>
                </div>
                <div className="md:col-span-5 p-8 border-r border-border">
                  <p className="text-xs tracking-widest uppercase text-sage mb-2">Хороший лид</p>
                  <p className="text-muted-foreground leading-relaxed">{item.good}</p>
                </div>
                <div className="md:col-span-5 p-8">
                  <p className="text-xs tracking-widest uppercase text-terracotta mb-2">Не передавайте</p>
                  <p className="text-muted-foreground leading-relaxed">{item.bad}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-border">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Важно</p>
            <p className="text-muted-foreground leading-relaxed">
              Мы не работаем с тендерами, не рассматриваем лиды из регионов с разницей от Москвы +4 часа и более,
              а также не берём проекты без бюджета или с нереалистичными ожиданиями по срокам.
              Если сомневаетесь — лучше спросите у нас заранее.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Начать партнёрство
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Давайте
                <br />
                поговорим
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Изучите материалы, напишите нам — созвонимся, ответим на вопросы и заключим договор.
                Обычно от первого контакта до подписания уходит 2–3 дня.
              </p>

              <div
                className={`space-y-6 transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Пример дохода</p>
                  <p className="text-foreground">1 клиент на рекламу 600 тыс./мес = <strong>90 тыс. руб./мес</strong> вам</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Ещё пример</p>
                  <p className="text-foreground">2 SEO-клиента по 150 тыс./мес = <strong>45 тыс. руб./мес</strong> — окупает ваш маркетинг</p>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="ваш@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Расскажите о себе
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors resize-none"
                    placeholder="Чем занимаетесь, какая аудитория, есть ли уже лиды..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  Стать партнёром
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
