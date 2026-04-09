import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Контекстная реклама",
    description: "Работаем с бюджетами от 500 тыс. руб./мес. Ведём проекты в 5–40 регионах одновременно. Специализируемся на конкурентных нишах с высоким CPL.",
    iconName: "TrendingUp",
  },
  {
    title: "SEO-продвижение",
    description: "Комплексное SEO для коммерческих сайтов: технический аудит, контент, линкбилдинг. Сроки выхода в ТОП — от 4 месяцев, оплата за сопровождение.",
    iconName: "Search",
  },
  {
    title: "Квалифицированный лид",
    description: "Принимаем лиды по BANT: бюджет от 300 тыс. руб., наличие ЛПР, реальная потребность и горизонт старта до 1 месяца. Только прямые сделки — без тендеров.",
    iconName: "Users",
  },
  {
    title: "Ваше вознаграждение",
    description: "15% от суммы контракта на весь срок жизни клиента. Пример: клиент на рекламу 600 тыс./мес = 90 тыс. руб./мес вам. За год — до 1 080 000 руб. с одного лида.",
    iconName: "Banknote",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Условия партнёрства
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Что мы делаем
            <span className="italic"> и платим</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-background p-10 lg:p-14 group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-sage mb-6 group-hover:text-terracotta transition-colors duration-500">
                <Icon name={service.iconName} size={32} />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
