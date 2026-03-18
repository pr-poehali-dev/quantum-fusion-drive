import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Indus OS",
    category: "Операционная система",
    image: "/placeholder.jpg",
    description:
      "Флагманский продукт RT GAMES — операционная система нового поколения. Быстрая, безопасная и красивая. Создана для тех, кто ценит качество.",
    url: "https://indus-os.com",
    tags: ["RT GAMES", "OS", "Технологии"],
  },
  {
    title: "Indus co. Platform",
    category: "Цифровая платформа",
    image: "/placeholder.svg",
    description:
      "Единая экосистема приложений и сервисов Indus co. Всё, что нужно — в одном месте. Интегрированные инструменты для работы и развлечений.",
    url: "https://indus-os.com",
    tags: ["Платформа", "Экосистема", "RT GAMES"],
  },
  {
    title: "RT GAMES Studio",
    category: "Игровая разработка",
    image: "/placeholder.svg",
    description:
      "Студия RT GAMES — создатель Indus co. Профессиональная команда разработчиков, дизайнеров и инженеров, объединённых одной миссией.",
    url: "https://indus-os.com",
    tags: ["RT GAMES", "Studio", "Разработка"],
  },
  {
    title: "Indus Community",
    category: "Сообщество",
    image: "/placeholder.jpg",
    description:
      "Растущее сообщество пользователей и разработчиков вокруг платформы Indus co. Присоединяйтесь к тысячам людей, которые уже с нами.",
    url: "https://indus-os.com",
    tags: ["Сообщество", "Пользователи", "Open Source"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Продукты Indus co.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Всё, что создала RT GAMES — от операционной системы до экосистемы сервисов. Узнайте, что входит во вселенную Indus co.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}