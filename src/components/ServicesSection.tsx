import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Единая среда",
    description:
      "Indus co. объединяет все инструменты в одном месте. Никаких лишних приложений — только чистое, удобное пространство для работы и жизни.",
  },
  {
    icon: Palette,
    title: "Современный интерфейс",
    description:
      "Продуманный до мелочей дизайн от RT GAMES. Красивый, интуитивный и отзывчивый — платформа, которой приятно пользоваться каждый день.",
  },
  {
    icon: Code,
    title: "Мощная технология",
    description:
      "Под капотом — передовые разработки команды RT GAMES. Высокая скорость, надёжность и безопасность на всех уровнях.",
  },
  {
    icon: Share2,
    title: "Связь и экосистема",
    description:
      "Indus co. создаёт экосистему, где всё связано. Бесшовная интеграция сервисов, приложений и устройств в единое целое.",
  },
  {
    icon: Target,
    title: "Ориентация на цель",
    description:
      "RT GAMES создали Indus co. с одной миссией — дать пользователям лучший опыт. Каждое решение принято с фокусом на вас.",
  },
  {
    icon: Search,
    title: "Прозрачность",
    description:
      "Никаких скрытых механизмов. Indus co. — открытая платформа, в которой вы всегда знаете, что происходит с вашими данными.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Возможности платформы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Почему Indus co. <span className="text-primary">особенная</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          RT GAMES вложили в Indus co. всё лучшее — от технологий до пользовательского опыта. Вот что делает её уникальной.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}