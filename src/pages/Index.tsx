import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const exercises = [
  {
    id: 1,
    title: 'Растяжка грудного отдела',
    duration: '5 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Упражнение для раскрытия грудной клетки и улучшения осанки. Помогает снять напряжение после длительной работы за компьютером.',
    equipment: ['Коврик для йоги']
  },
  {
    id: 2,
    title: 'Укрепление мышц спины',
    duration: '7 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Комплекс для укрепления мышечного корсета спины. Эффективная профилактика сколиоза и болей в пояснице.',
    equipment: ['Гантели 1-2 кг', 'Коврик для йоги']
  },
  {
    id: 3,
    title: 'Коррекция осанки',
    duration: '10 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Базовые упражнения для восстановления правильного положения позвоночника и формирования здоровой осанки.',
    equipment: ['Коврик для йоги', 'Стена']
  },
  {
    id: 4,
    title: 'Расслабление шейного отдела',
    duration: '4 минуты',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Мягкая растяжка для шеи и плеч. Устраняет зажимы и головные боли напряжения при сидячей работе.',
    equipment: ['Не требуется']
  },
  {
    id: 5,
    title: 'Упражнения для лопаток',
    duration: '6 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Укрепление межлопаточной зоны для правильной осанки. Помогает избавиться от сутулости и округлых плеч.',
    equipment: ['Эластичная лента', 'Коврик для йоги']
  },
  {
    id: 6,
    title: 'Растяжка поясницы',
    duration: '5 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Снятие напряжения в нижней части спины. Профилактика болей и улучшение гибкости поясничного отдела.',
    equipment: ['Коврик для йоги', 'Валик или полотенце']
  },
  {
    id: 7,
    title: 'Укрепление кора',
    duration: '8 минут',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Комплекс для укрепления мышц центра тела. Стабилизирует позвоночник и улучшает общую физическую форму.',
    equipment: ['Коврик для йоги', 'Фитбол (опционально)']
  }
];

const faqs = [
  {
    question: 'Как часто нужно выполнять упражнения?',
    answer: 'Для достижения видимого результата рекомендуется выполнять комплекс упражнений 3-4 раза в неделю. При регулярных занятиях первые улучшения вы заметите уже через 2-3 недели.'
  },
  {
    question: 'Можно ли заниматься при сколиозе?',
    answer: 'Данные упражнения разработаны специально для профилактики и коррекции начальных стадий сколиоза. Однако при диагностированном сколиозе рекомендуется предварительно проконсультироваться с врачом.'
  },
  {
    question: 'Сколько времени занимает один сеанс?',
    answer: 'Полный комплекс занимает от 20 до 30 минут. Вы также можете выбирать отдельные упражнения в зависимости от доступного времени и ваших потребностей.'
  },
  {
    question: 'Нужно ли специальное оборудование?',
    answer: 'Все упражнения можно выполнять без специального оборудования в домашних условиях. Вам понадобится только удобная одежда и коврик для занятий.'
  }
];

const allEquipment = [
  { name: 'Коврик для йоги', icon: 'LayoutGrid' },
  { name: 'Гантели 1-2 кг', icon: 'Dumbbell' },
  { name: 'Эластичная лента', icon: 'Link' },
  { name: 'Валик или полотенце', icon: 'Cylinder' },
  { name: 'Фитбол (опционально)', icon: 'Circle' },
];

export default function Index() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/40 via-background to-muted/30">
      <header className="border-b border-border bg-primary/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-cormorant text-3xl font-semibold tracking-tight">
            Упражнения для осанки
          </h1>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,124,92,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(78,55,54,0.15),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
                Здоровая спина — основа вашего благополучия
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Простые и эффективные упражнения для профилактики сколиоза
                и улучшения осанки в домашних условиях
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-accent/15 via-secondary/25 to-accent/15 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,124,92,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-cormorant text-3xl md:text-4xl font-light mb-3">
                  Необходимый инвентарь
                </h2>
                <p className="text-foreground/70">
                  Для комфортного выполнения всех упражнений вам понадобится:
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {allEquipment.map((item, index) => (
                  <Card 
                    key={index}
                    className="p-4 text-center hover:shadow-lg transition-all border-border/50 animate-scale-in bg-gradient-to-br from-card to-secondary/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-primary-foreground" />
                      </div>
                      <p className="text-sm font-medium leading-tight">{item.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-muted/30 via-secondary/20 to-accent/10 relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,124,92,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,124,92,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto space-y-8">
              {exercises.map((exercise, index) => (
                <Card 
                  key={exercise.id}
                  className="overflow-hidden transition-all hover:shadow-xl animate-scale-in border-border/50 bg-gradient-to-br from-card to-secondary/30"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary to-accent">
                    <iframe
                      src={exercise.videoUrl}
                      title={exercise.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 md:p-8 bg-gradient-to-br from-secondary/20 to-accent/10">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <h3 className="font-cormorant text-3xl font-medium">
                        {exercise.title}
                      </h3>
                      <div className="bg-gradient-to-br from-secondary to-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                        {exercise.duration}
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {exercise.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-muted/25 to-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,55,54,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-center">
                Часто задаваемые вопросы
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-cormorant text-xl py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,124,92,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(78,55,54,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
                Готовы к более глубокой трансформации?
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Получите персональную программу от профессионального инструктора
                с индивидуальным подходом и детальной поддержкой
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-medium px-8"
                >
                  Узнать подробнее
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-medium px-8 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Упражнения для осанки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}